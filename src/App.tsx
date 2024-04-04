import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function App() {

  return (
    <div className='flex flex-col w-full items-center my-auto h-full justify-center bg-black text-white overflow-x-hidden h-full mt-6'>
      {/* <Avatar>
        <AvatarImage src="/luna.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <img src="/luna.png"  width="200"  className='rounded-full scale-75 '  />
      <p className='text-3xl  font-serif ' >Luna</p>

      <p className='text-sm font-serif '>Femea</p>

      <p className='font-serif grid grid-cols-4 gap-1 place-items-start '>Telefone:</p>

      <div className='grid grid-cols-1 gap-1 place-content-stretch h-20'>

        <div className='flex gap-5'>
          <a className='font-serif' href="tel:+5519987107323">Ligue para Julia (19)98710-7323</a>
          <a href="https://wa.me/5519987107323" target="_blank">
            <img src="/whatsapp.png" alt="WhatsApp" width="25" />
          </a>
        </div>

        <div className='flex gap-3'>
          <a className='font-serif '  href="tel:+5531993420757">Ligue para Lucas (31)99342-0757</a>
          <a href="https://wa.me/555531993420757" target="_blank">
            <img src="/whatsapp.png" alt="WhatsApp" width="25" />
          </a>
        </div>

      </div>


    </div>
  )
}

export default App
