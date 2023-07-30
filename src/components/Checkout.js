import React, {useState} from 'react'


const Checkout = () => {
  const [selectedSubscription,setSelectedSubscription]= useState("")
  const handlePurchase = () =>{
      fetch('/create-checkout-session', {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          items: 
            selectedSubscription
        })
      }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      }).then(({url}) => {
        window.location = url
      })
  }
  // const button = document.querySelector("button")
  

  return (
    <div>
      <button onClick={(e)=>handlePurchase()}>Purchase</button>
    </div>

  )
}

export default Checkout
