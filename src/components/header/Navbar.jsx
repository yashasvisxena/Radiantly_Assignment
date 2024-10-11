

import { Toggle } from "./Toggle"
import logo from "/favicon.png"
const Navbar = () => {
  return (
    <div className='w-full p-4 flex items-center justify-between'>
        <div className="flex items-center justify-between">
            <img src={logo} alt="" className="w-14 mr-5"/>
            <h1 className="text-3xl font-bold text-center">Radiantly.</h1> 
        </div>
        <Toggle/>
    </div>
  )
}

export default Navbar