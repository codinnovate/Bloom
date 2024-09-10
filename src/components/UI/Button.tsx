import React from 'react'

const Button = ({title, className}) => {
  return (
    <button className={`${className} w-[12em] bg-[#ffa9b4] font-semibold py-3 rounded-md hover:bg-pink-300 transtion-all text-black`}>
        {title}
    </button>
  )
}

export default Button
