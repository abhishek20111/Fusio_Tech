import React from "react";
// import '../App.css'
import img_23 from "../assets/img_som/23.jpg";
import img_24 from "../assets/img_som/24.jpg";
import img_25 from "../assets/img_som/25.jpg";
import img_11 from "../assets/img_som/11.jpg";
import img_12 from "../assets/img_som/12.jpg";
import img_14 from "../assets/img_som/14.jpg";
import img_16 from "../assets/img_som/16.png";
import img_15 from "../assets/img_som/15.png";
import img_101 from "../assets/img_som/101.png";
import img_102 from "../assets/img_som/102.png";
import img_103 from "../assets/img_som/103.png";

export default function ExtraLandingPage() {
  return (
    <div>
      <main>
        <section className="section1 w-full">
          <div className="flex flex-col m-5">
            <h1 className="m-auto text-3xl font-bold p-3">
              Why <span className="text-[#00bbff] mx-2">Fusiotech?</span>
            </h1>
            <p className="sm:w-[60%] text-lg text-gray-600 m-auto text-center p-6">
              Student who are loking to grab interships and projects to showcase
              there resume in diffrent way have a best paltform from fusiotech
            </p>
            <div className="album flex-wrap flex justify-around">
              <img src={img_23} alt="" />
              <img src={img_24} alt="" />
              <img src={img_25} alt="" />
            </div>
          </div>
        </section>
        <section className="section2 ">
          <h1 className="text-3xl font-bold text-center">
            Some <span className="text-[#00bbff] mx-2">Happy Faces</span> of Students
          </h1>
          <p className=" text-lg text-gray-600  text-center p-5">
            Happy faces due to Fusiotech
          </p>
          <div className="w-full justify-center  flex">

          <div className="w-full m-2 justify-center sm:w-[80%] gap-x-8 flex gap-y-3 flex-wrap">
            <img src={img_15} className="w-[250px] sm:w-[200px] sm:h-[200px]" alt="" />
            <img
              className="w-[250px] sm:w-[200px] sm:h-[200px]"
              src={img_11}
              alt=""
              />
            <img
              className="w-[250px] sm:w-[200px] sm:h-[200px] "
              src={img_14}
              alt=""
              />
            <img
              className="w-[250px] h-[200px] sm:w-[200px] sm:h-[200px]"
              src={img_12}
              alt=""
              />
            <img
              className="w-[250px] h-[200px] sm:w-[200px] sm:h-[200px]"
              src={img_16}
              alt=""
              />
          </div>
              </div>
        </section>
        <section className="w-full">
          <h1 className="text-3xl flex justify-center mt-8 font-bold">
            Sucess <span className="mx-4 text-[#00bbff]">Stories</span>
          </h1>
          <div className="flex justify-center gap-x-20 flex-wrap p-8 sm:p-14">
            <div>
              <img
                src={img_101}
                className="sm:w-[350px] sm:h-[300px] "
                alt=""
                srcSet
              />
            </div>
            <div>
              <img src={img_102} className="sm:w-[350px] sm:h-[300px] " alt="" />
            </div>
            <div>
              <img src={img_103} className="sm:w-[350px] sm:h-[300px] " alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
