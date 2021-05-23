import React from 'react'
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function NavBar() {
 return (
  <header className="bg-blue-300">
   <div className= "container mx-auto flex justify-between">
    <nav className="flex">
     <NavLink to ="/" exact 
     activeClassName="text-blue-800 "
     className="inflex-flex item-conter py-6 px-3 mr-4 text-red-100 hover:text-blue-800 text-4xl font-bold cursive traking-widest " >
      Snir
     </NavLink>
     <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-blue-500"      activeClassName="bg-blue-500"
>
      Blog Posts
     </NavLink>     
     <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-blue-500" activeClassName="bg-blue-500">
      Projects
     </NavLink>
     <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-blue-500" activeClassName="bg-blue-500">
      About me!
     </NavLink>
    </nav>
    <div className="inline-flex py-3 px-3 my-6" >

     <SocialIcon url= "https://github.com/snire95" className= "mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}      />     
     <SocialIcon  url= "https://www.linkedin.com/in/snir-elmaliah-9924311a7/" className= "mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}   />     
     <SocialIcon  url= "https://www.facebook.com/snir.elmaliah/" className= "mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}   />
    <SocialIcon  url= "https://www.instagram.com/snir__el/" className= "mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}   />

    </div>
   </div>
  </header>
 )
}
