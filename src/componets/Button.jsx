import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
    <Button className="">
        {label}

        <img src={iconUrl} alt="arrow right icon" className="w-5 h-5 ml-2 rounded-full "/>
    </Button>
  )
}

export default Button
