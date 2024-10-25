import React from "react";

const data = [
  { id: 1, title: "Passive investment", description: "Veno enim ad minim veniam qu" },
  { id: 2, title: "HR management", description: "Ut enim ad minim veniam qui" },
  { id: 3, title: "Cyptocurrency", description: "Dolores ad minim veniam" },
  { id: 4, title: "Business interrogation", description: "Lorem Business interrogation" },
  { id: 5, title: "Research", description: "Ipsum enim ad minim veniam" },
  { id: 6, title: "Business interrogation", description: "Ex enim ad minim veniam quid" },
];

const logos = [
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-cl-02.png", // Replace with your image paths
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-cl-10.png",
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-cl-03.png",
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-icon-8.png",
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-cl-05.png",
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-icon-010.png",
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-cl-09.png",
  "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-icon-012.png",
//   "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/hover-cl-07.png"
];

const Business = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="w-[100%] max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-16">
        {/* Left Text Section */}
      <div className="md:col-span-2">
  <div className="uppercase text-xs sm:text-sm tracking-wider px-4 sm:px-10 md:px-20 text-[#af7b36] mb-2 sm:mb-4">
    Business Service
  </div>
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 text-left px-4 sm:px-10 md:px-20 leading-tight mb-10 sm:mb-16 md:mb-20">
    Fields of expertise that our <br /> great team excels in
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
    {data.map((item, index) => (
      <div key={index} className="relative text-gray-800">
        <h2 className="absolute bottom-2 left-8 sm:left-12 md:left-16 lg:left-20 text-[60px] sm:text-[70px] md:text-[90px] lg:text-[100px] text-[#e5ccac] font-light leading-none z-0 opacity-85">
          {item.id}
        </h2>
        <div className="relative z-10 pl-4 sm:pl-10 md:pl-16 lg:pl-20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>



        
        {/* Right Logos Section */}
        <div className="flex flex-wrap items-center justify-start gap-8 lg:gap-10 md:mt-40 ">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo} 
              alt={`Logo ${i + 1}`}
              className="w-14 md:w-10 lg:w-14 object-contain "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
    