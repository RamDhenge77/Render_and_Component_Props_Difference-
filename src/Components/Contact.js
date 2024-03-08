import React, { useEffect } from 'react'

const Contact = (props) => {
    useEffect(()=>{
        console.log("Contact rendered");
    })
  return (
    <div>
      <h1>{props.name} Page</h1>
    </div>
  )
}

export default Contact
