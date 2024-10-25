import React from 'react';
const socialIcons = [
    {  label: "G" },  // Google Icon (for example)
    {  label: "B" },    // Behance Icon (for example)
    {  label: "P" },  // Pinterest Icon (for example)
  ];

const Footer = () => {
  return (
    <footer className="bg-[#170802] text-white py-16  ">
      {/* Container for the footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-10  md:px-4">
  {/* First column - HALSTEIN and description */}
  <div className="md:col-span-6 space-y-10">
    <h1 className="text-4xl font-semibold">HALSTEIN</h1>
    <p className='leading-loose' >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
      Itaque voluptatem facilis corrupti dicta. <br></br>Cupiditate magni, modi rem,
      Nam iusto accusantium consequuntur?
    </p>

    {/* Social Icons */}
 
    <div className="flex space-x-10">
  {socialIcons.map((item, index) => (
    <div key={index} className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
      {/* Placeholder icon */}
      <span className="text-xl">{item.label}</span>
    </div>
  ))}
</div>

     
    
    </div>
 


  {/* Second column - Halstein Links */}
  <div className="md:col-span-2">
    <h2 className="text-2xl font-light">Halstein</h2>
    <ul className="space-y-2 mt-4 ">
      <li className="hover:text-white cursor-pointer">Privacy</li>
      <li className="hover:text-white cursor-pointer">Conditions</li>
      <li className="hover:text-white cursor-pointer">Offices</li>
      <li className="hover:text-white cursor-pointer">Careers</li>
    </ul>
  </div>

  {/* Third column - FAQ Links */}
  <div className="md:col-span-2">
    <h2 className="text-2xl font-light">FaQ</h2>
    <ul className="space-y-2 mt-4 ">
      <li className="hover:text-white cursor-pointer">Privacy</li>
      <li className="hover:text-white cursor-pointer">Offices</li>
      <li className="hover:text-white cursor-pointer">Careers</li>
      <li className="hover:text-white cursor-pointer">Conditions</li>
    </ul>
  </div>

  {/* Fourth column - Subscribe form */}
  <div className="md:col-span-2">
    <h2 className="text-2xl font-light">Subscribe</h2>
    <form className="mt-4">
      <input 
        type="email" 
        placeholder="E-mail*" 
        className="bg-transparent border-b border-gray-500 w-full py-2 placeholder-gray-400 text-gray-300 outline-none"
      />
    </form>
  </div>
</div>


      {/* Footer Bottom Section */}
      {/* <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center  px-4 md:px-6">
          <p className="text-center md:text-left">© 2022, All Rights Reserved</p>
          <p className="text-center md:text-right">Designed by: Saloni Rana</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
