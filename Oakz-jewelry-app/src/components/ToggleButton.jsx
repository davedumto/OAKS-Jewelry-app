import { useState } from "react"


export default function ToggleButton({title,children, className, ...props}) {
  const [isDisabled, setDisabled] = useState(false)

  return(
    <button 
      {...props} 
      className={`
        rounded-[2.25em] flex items-center justify-center ${className}
        ${isDisabled ? "bg-green text-white" : "bg-gray-500 text-black cursor-not-allowed"}
      `}
      disabled={() => setDisabled(!isDisabled)}
    >
      {children}
      {title}
    </button>
  )
}