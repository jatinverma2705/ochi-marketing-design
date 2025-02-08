import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.2" >
      <div className="bg-[#CDEA68] w-full h-[70vh] text-black rounded-tl-3xl rounded-tr-3xl pt-5 ">
        <div className="heading pl-[4vw] py-20 pr-[9vw] h-[80%] border-b-[2px] border-[#B3CC5E]">
          <h1 className="font-montreal text-[3.5vw] leading-none ">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to raise funds, sell products, explain complex
            ideas, and hire great people.
          </h1>
        </div>
      </div>

      <div className=" bg-[#CDEA68] w-full flex gap-5 font-montreal text-black h-[80vh] overflow-hidden py-10">
        <div className="w-1/2 p-10 ">
          <h1 className="text-5xl font-semibold">Our Approach:</h1>
          <div className="mt-6 ">
            <button className="bg-[#212121]  text-white py-5 px-8 rounded-full flex gap-6 items-center tracking-normal text-sm hover:bg-[#000] hover:transition">
              READ MORE{" "}
              <div className="bg-white h-3 w-3 rounded-full hover:scale-[1.9] transition duration-400 ease-in-out"></div>
            </button>
          </div>
        </div>

        <img
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt="about_image"
          className="rounded-2xl hover:scale-105 transition duration-500 h-[30vw] w-[40vw]"

        />
      </div>
    </div>
  );
};

export default About;
