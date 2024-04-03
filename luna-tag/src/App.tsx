import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../src/@/ui/avatar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col w-full items-center my-auto h-full justify-center'>
    <Avatar>
    <AvatarImage src="/luna.jpg" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    {/* <img src="/luna.jpg"  width="200"  className='rounded-full' /> */}
    <p className='text-2xl' >Luna</p>
    <p className='text-base'>Sexo:Femea</p>
    <p >Telefone:</p>
    <div className='flex gap-1'>
    <a href="tel:+5519987107323">Ligue para Julia  (19)98710-7323</a>
    <a href="https://wa.me/5519987107323" target="_blank">
    <img src="/whatsapp.png" alt="WhatsApp" width="30" />
    </a>
    </div>
    <p className='text-md'>Telefone:</p>
    <div className='flex gap-1'>
      <a href="tel:+5531993420757">Ligue para Lucas  (31)99342-0757</a>
      <a href="tel:+5531993420757">Ligue para Lucas  (31)99342-0757</a>
      <a href="https://wa.me/555531993420757" target="_blank">
        <img src="/whatsapp.png" alt="WhatsApp" width="30"/>
      </a>
    </div>

  </div>
  )
}

export default App
