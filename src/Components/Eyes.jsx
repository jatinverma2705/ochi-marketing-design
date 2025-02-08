import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // We have to convert the radian angle provided by atan2 in degrees.
      var angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setrotate( angle - 180);
    });
  }); 

  return (
    <div className="w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-center bg-cover'>
        <div className="absolute  h-[30vh]  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 justify-center items-center ">
          <div className="w-[13.5vw] h-[13.5vw] rounded-full bg-[#F4F4F4] flex items-center justify-center">
            <div className="relative h-2/3 w-2/3 bg-zinc-900 rounded-full overflow-hidden  flex  items-center justify-center">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  ">
                <div className="h-full w-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[13.5vw] h-[13.5vw] rounded-full bg-[#F4F4F4] flex items-center justify-center">
            <div className="relative h-2/3 w-2/3 bg-zinc-900 rounded-full overflow-hidden  flex items-center justify-center">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5">
                <div className="h-full w-5 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
