import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const statsData = [
  { number: 80, label: "Clients" },
  { number: 5, label: "Years Experience" },
  { number: 250, label: "Projects" },
  { number: 45, label: "Field Experts" },
];



const SuccessSection = () => {

    const [counterStart, setCounterStart] = useState(false)
console.log(counterStart)

  return (
    <div  className="bg-[#170802] text-white px-10 md:px-20 py-20 md:py-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Section */}
        <div className="space-y-10">
          <p className="text-[#8C7258] uppercase tracking-widest">
            Always Professional
          </p>
          <h1 className="text-4xl md:text-5xl font-medium ">
            We'll make sure your hard  work succeeds.
          </h1>
          <p className="text-base ">
            Duis sid elicit deus, venitas lorem ipsum dolor  
            postero elam.
          </p>
          <button className=" px-10  py-2  mt-6 bg-[#D2A679] text-black rounded-md hover:bg-opacity-90 transition">
            View More
          </button>
        </div>

        {/* Right Side - Stats Section */}

<ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
<div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-10 ">
          {statsData.map((item, index) => (
            <div key={index} className="text-start md:text-center">
            {counterStart &&
              <p className="text-4xl md:text-8xl mb-5   ">
                <CountUp className="text-[#484242]" start={0} end={item.number} duration={2}/>
              {/* {item.number} */}
            </p>
            }
              <p className="text-md uppercase">{item.label}</p>
            </div>
          ))}
        </div>
</ScrollTrigger>

        
      </div>
    </div>
  );
};

export default SuccessSection;
