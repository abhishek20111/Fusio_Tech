import { useState } from "react";
import GITTT from "../assets/pic_1.avif";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

export default function LandingPage() {
  const isLogin = useSelector((state) => state.userData.isLogin);

  const features = [
    {
      name: "Trusted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "400 ratings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="h-[800px] sm:h-full min-h-screen md:flex-none md:flex-col md:justify-center">
      <Fade>
        <div
          className={`max-w-screen-xl mx-auto px-4 pt-12 md:pt-28 gap-12  text-gray-600 md:px-8 xl:flex `}
        >
          <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
            <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-x-2 text-gray-500 text-sm"
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
            <h1 className="text-4xl text-gray-800 font-bold mx-auto md:text-5xl">
            Build your <span className="mx-2 text-[#00bbff]">IT here <br /> You have a vision.</span> we have a <span className="mx-2 text-[#00bbff]">team</span>     to get you there
            </h1>
            <p className="max-w-xl mx-auto xl:mx-0 py-4">
            "Fusiotech: Where Innovation and Expertise Converge to Fuel Your Success in the Digital Era."
            </p>
            <div className="items-center justify-center gap-x-3 md:space-y-3 sm:flex sm:space-y-0 xl:justify-start py-4">
              <Link to="/intern">
                <a className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-blue-500 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
                  Browse Internships
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-1 mx-auto mt-10 xl:mt-0 ">
            <div className="relative z-0 hidden sm:flex rounded-tl-3xl ">
              <img
                src={GITTT}
                className="w-[600px] rounded-tl-3xl rounded-br-3xl "
                alt=""
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
