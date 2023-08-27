import React from "react";
import { Zoom } from "react-awesome-reveal";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import p4 from "../../assets/4.png";
import p5 from "../../assets/5.png";

function Services() {
  return (
    <div className="w-full flex-col flex items-center md:my-16 my-10">
      <Zoom>
        <div className="w-full flex flex-col items-center bg-white rounded-lg  md:flex-row ">
          <div className="md:w-1/2 flex justify-center">
            <img
              className=" object-cover w-full rounded-t-lg md:w-[500px] md:rounded-none md:rounded-l-lg"
              src={p4}
              alt=""
            />
          </div>
          <div className="flex md:w-1/2 flex-col justify-between p-4 leading-normal text-center">
            <h5 className="mb-2 sm:text-4xl text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
              Software Develoment
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
              Our Software Development stream offers comprehensive training on
              App and Web Development, covering everything from front-end
              technologies like HTML, CSS, and JavaScript to back-end
              technologies like Node.js, Django, and other mordern framrworks.
              You'll gain the skills to build cutting-edge applications and
              become a proficient full-stack developer. Whether it's crafting
              stunning user interfaces or designing efficient databases, our
              training prepares you to excel in the dynamic world of software
              development.
            </p>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className=" flex flex-col-reverse  items-center bg-white  w-full rounded-lg  md:flex-row ">
          <div className="flex md:w-1/2 flex-col justify-center p-4 leading-normal text-center">
            <div className="flex flex-col items-center w-11/12">
              <h5 className="mb-2 sm:text-4xl text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
                Cloud Computing
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-11/12 ">
                In our Cloud Computing stream, you'll receive top-notch training
                on all major platforms such as AWS, GCP, and Azure. Learn to
                deploy scalable and secure cloud solutions, manage virtual
                machines, and harness the power of cloud services. Our hands-on
                projects will help you become proficient in cloud technologies
                used by leading companies worldwide. From DevOps to serverless
                architecture, this training equips you to navigate the cloud
                with confidence.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className=" object-cover w-full rounded-t-lg md:w-[500px] md:rounded-none md:rounded-l-lg"
              src={p1}
              alt=""
            />
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className=" flex flex-col items-center bg-white  w-full rounded-lg  md:flex-row ">
          <div className="md:w-1/2 flex justify-center">
            <img
              className=" object-cover w-full rounded-t-lg md:w-[500px] md:rounded-none md:rounded-l-lg"
              src={p2}
              alt=""
            />
          </div>
          <div className="flex md:w-1/2 flex-col justify-between p-4 leading-normal text-center">
            <h5 className="mb-2 sm:text-4xl text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
              Graphic Designing
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
              Unleash your creativity with our Graphic Designing training. Learn
              to create stunning visuals, logos, and marketing materials using
              industry-standard tools like Adobe Photoshop, Illustrator, and
              InDesign. From concept to execution, our courses empower you to
              become a versatile graphic designer capable of crafting
              captivating designs for various media platforms.
            </p>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className=" flex flex-col-reverse  items-center bg-white  w-full rounded-lg  md:flex-row ">
          <div className="flex md:w-1/2 flex-col justify-center p-4 leading-normal">
            <div className="flex flex-col items-center w-11/12 text-center">
              <h5 className="mb-2 sm:text-4xl text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
                Database Management
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-10/12 ">
                Become a proficient Database Manager with our comprehensive
                training. Learn to design, optimize, and manage databases for
                efficient data storage and retrieval. From SQL to NoSQL
                databases, our expert-led courses cover a wide range of database
                technologies used in modern applications. Master the skills
                needed to ensure data integrity, security, and high performance
                in database systems.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className=" object-cover w-full rounded-t-lg md:w-[500px] md:rounded-none md:rounded-l-lg"
              src={p5}
              alt=""
            />
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className=" flex flex-col items-center bg-white  w-full rounded-lg  md:flex-row ">
          <div className="md:w-1/2 flex justify-center">
            <img
              className=" object-cover w-full rounded-t-lg md:w-[500px] md:rounded-none md:rounded-l-lg"
              src={p3}
              alt=""
            />
          </div>
          <div className="flex md:w-1/2 flex-col justify-between p-4 leading-normal text-center">
            <h5 className="mb-2 sm:text-4xl text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
              Machine Learning - Deep Learning
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
              Dive into the world of AI and Machine Learning with our
              specialized training. Learn to develop smart algorithms, build
              predictive models, and apply ML techniques to real-world problems.
              Acquire the skills needed to work on groundbreaking AI projects
              and contribute to the future of technology. From natural language
              processing to computer vision, our expert-led courses ensure
              you're at the forefront of AI advancements.
            </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Services;
