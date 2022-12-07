import React from 'react'

function CardWork({item}) {
  return (
    <div class="flex flex-col items-center space-y-5">
    <img src={item.img} alt="" class="mb-6" />
    <h5>{item.title}</h5>
    <p class="max-w-md text-grayishBlue">
      {item.text}
    </p>
  </div>
  )
}

export default CardWork