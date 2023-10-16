import React from "react";
import {
  BsAndroid2,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTwitter,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" p-8 bg-slate-300 mb-4 ">
       <div  className=" md:flex  justify-between"> 
      
        <div className="md:flex gap-8">
          <div>
            <h2 className="font-bold">COMAPNY INFO</h2>
            <ul>
              <li>About</li>
              <li>Social Responsibilty</li>
              <li>Affiliate</li>
              <li>Fashion Blogger</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">HELP AND SUPPORT</h2>
            <ul>
              <li>About</li>
              <li>Social Responsibilty</li>
              <li>Affiliate</li>
              <li>Fashion Blogger</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">CUSTOMER SUPPORT</h2>
            <ul>
              <li>About</li>
              <li>Social Responsibilty</li>
              <li>Affiliate</li>
              <li>Fashion Blogger</li>
            </ul>
          </div>
        </div>
    

{/* social */}

      <div className="flex ">
       <div className="md:flex gap-10">
       <div>
          <h2 className="font-bold">SOCIALS</h2>
          <ul className="flex ">
            <li className="mr-3">
          
              <BsFacebook />
            </li>
            <li className="mr-3">
           
              <BsTwitter />
            </li>
            <li className="mr-3">
              
              <BsInstagram />
            </li>
            <li className="mr-3">
          
              <BsSnapchat />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">PLATFORMS</h2>
          <ul className="flex">
            <li className="mr-3">
            
              <BsApple />
            </li>
            <li className="mr-3">
             
              <BsAndroid2 />
            </li>
          </ul>
        </div>
      </div>
       </div>
</div>

{/* copyRights       */}

<div className="flex justify-center pt-4">
    <h2>2003 - 2023 @  copyrights Reserved</h2>   
</div>

    </div>
  );
};

export default Footer;
