import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import OAKZ_WHITE from "/images/OAKZ_white.svg";
import ArrowRoundedBack from "/images/mingcute.svg";
import { AddCircleOutline, LocalGroceryStoreOutlined, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Checkout = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const { state } = useLocation();
  const { totalPrice, cartItems } = state || { totalPrice: 0, cartItems: [] };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init("B0kxURD-9E5mRSCFt"); // Initialize EmailJS with your public API key
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf" || selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        setError("");
      } else {
        alert("Please upload either an image file or a PDF.");
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatCartItems = (items) => {
    return items.map(item => (
      `<li>${item.name} (Price: ${item.price}, Quantity: ${item.quantity}, Color: ${item.color}, Size: ${item.size})</li>`
    )).join('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload proof of payment.");
      return;
    }

    try {
      const imageUrl = await uploadImage(file);

      emailjs.send('service_sgqc1o8', 'template_l6ahm4r', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
        cartItems: formatCartItems(cartItems),
        totalPrice: totalPrice,
        image: imageUrl
      }, 'B0kxURD-9E5mRSCFt')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Order submitted successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to submit order.');
      });
    } catch (error) {
      alert('Failed to upload image.');
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'my_unsigned_preset'); // Replace with your actual upload preset

    const response = await fetch(`https://api.cloudinary.com/v1_1/dwjnkuvqv/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.secure_url) {
      return data.secure_url;
    } else {
      throw new Error('Image upload failed');
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[5em] w-full">
        <div className="flex flex-col gap-[3em] px-[2em] py-[1.5em] md:px-[3em] ">
          <div>
            <header className="flex justify-between items-end my-[1em]">
              <Link to="/">
                <img src={OAKZ_WHITE} alt="logo icon" className="w-[6em] md:w-auto" />
              </Link>

              <div className="flex gap-[1em] items-center">
                <div className="hidden py-[0.125em] h-[2.125em] flex-row gap-1 hover:cursor-text rounded-[3.125em] bg-transparent border-[1.5px] border-green focus-within:border-green focus-within:border active:border-green items-center relative">
                  <input
                    type="search"
                    className="text-sm active:border-2 focus:text-[#04020099]/90 focus:border-none outline-none bg-inherit h-full w-[2.5em] text-beige"
                    placeholder=""
                  />
                  <div className="absolute inset-y-0 flex items-center">
                    <div className="w-[1.875em] cursor-pointer bg-green p-[2px] rounded-[3.125em] text-white">
                      <Search fontSize="medium" />
                    </div>
                  </div>
                </div>
                <LocalGroceryStoreOutlined />
              </div>
            </header>
            <div className="flex justify-between items-center bg-beige md:gap-[5em] p-3">
              <p className="text-[1em] md:text-[1.5em] leading-[0] font-normal">Checkout</p>
              <div className="md:flex-1"> </div>
              <Link to="/">
                <div className="flex items-center justify-center gap-[0.2em] text-[1.5em] leading-[0] font-normal cursor-pointer">
                  <img src={ArrowRoundedBack} alt="go back arrow icon" className="h-[0.9em] flex" />
                  <p className="hidden md:inline-block"> Go&nbsp;Back</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-[2em] md:flex-row flex-col w-full justify-between">
            <div className="flex flex-col shadow-2xl pt-[1em] pb-[2em] px-[1em] lg:w-[35%]">
              <div className="flex flex-col flex-1 gap-[2em]">
                <p className="text-[2em] font-normal">Your Items are</p>
                <ul className="text-[1em] flex-1">
                  {cartItems.map((item, index) => (
                    <li key={index} className="grid grid-cols-5">
                      <span className="flex justify-start col-span-2">{item.name}</span>
                      <span className="flex justify-end">x{item.quantity}</span>
                      <span className="flex justify-end col-span-2">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-[1px] bg-[#5252524D]"></div>
                <p className="flex w-full gap-2 justify-end">Total:<span>{totalPrice}</span></p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col shadow-2xl flex-1 gap-[0.5em] justify-between">
              <div className="flex flex-col justify-between flex-1 pt-[2em] pb-[2em]">
                <div className="flex flex-col gap-[1em] border-r-[1px] border-[#5252524D] px-[1.5em] justify-between">
                  <p className="text-[2em] leading-9">Input your details for identification</p>
                  <div className="flex flex-col w-full gap-[0.4em]">
                    <div className="w-full border-[1px] rounded-lg border-black p-2 leading-5">
                      <p>Name</p>
                      <input
                        className="w-full border border-white focus-visible:outline-none"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full border-[1px] rounded-lg border-black p-2 leading-5">
                      <p>Email</p>
                      <input
                        className="w-full border border-white focus-visible:outline-none"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full border-[1px] rounded-lg border-black p-2 leading-5">
                      <p>Phone</p>
                      <input
                        className="w-full border border-white focus-visible:outline-none"
                        type="text"
                        placeholder="Your Phone"
                        name="phone"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full border-[1px] rounded-lg border-black p-2 leading-5">
                      <p>Address</p>
                      <input
                        className="w-full border border-white focus-visible:outline-none"
                        type="text"
                        placeholder="Your Address"
                        name="address"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full border-[1px] rounded-lg border-black p-2 leading-5">
                      <p>Message</p>
                      <textarea
                        className="w-full border border-white focus-visible:outline-none"
                        placeholder="Your Message"
                        name="message"
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-[1.5em] pt-[2em] pb-[2em] justify-between">
                <div className="flex flex-col gap-[2em]">
                  <p className="text-[2em] leading-9">Transfer to the account below </p>
                  <div>
                    <ul>
                      <li className="flex justify-between"><span>Account Name:</span><span>OAKZ Stores</span></li>
                      <li className="flex justify-between"><span>Account Number:</span> <span>1234567890</span></li>
                      <li className="flex justify-between"><span>Bank Name:</span><span>Access Bank PLC</span></li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div>
                      <label htmlFor="file-upload" className="cursor-pointer block">
                        <div className="flex flex-col bg-[#04020012] border-2 border-dashed border-gray-300 px-4 py-1 rounded-lg w-64 mx-auto">
                          <div className="flex">
                            <div className="text-gray-b">
                              <AddCircleOutline className="text-2xl" />
                            </div>
                            <div className="">
                              {file && (
                                <p className="text-gray-700 overflow-hidden overflow-ellipsis whitespace-nowrap p-1">
                                  {file.name}
                                </p>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">Upload proof of payment</p>
                        </div>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <div>
                  <button
                    className="w-full hover:bg-[#2e5a26] bg-[#172D13] mt-[0.5em] text-white p-2 rounded-lg cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
