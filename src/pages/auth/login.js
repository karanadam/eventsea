import React from "react";
import Image from "next/image";
import googleLogo from "../../../public/google.png";
import linkedinLogo from "../../../public/linkedin.png";
// import waves from "../../../public/waves.png";
import eventSeaLogo from "../../../public/eventsea.png";
import deepSea from "../../../public/deepsea.jpg";
import waves from "../../../public/abstractwave.JPG";
const Login = () => {
  return (
    //main
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-t from-[#0076d6] to-[#5b9aff]">
      <div className="w-[70%] h-[82vh] rounded-lg flex flex-row justify-between overflow-hidden shadow-2xl ">
        <div className=" w-full basis-4/10 flex flex-col justify-center items-center bg-white">
          <div className="flex flex-col justify-center items-center mb-20">
            <Image src={eventSeaLogo} width={200}></Image>
            <h1 className="text-4xl font-semibold m-5 text-center">
              Log in or Create
              <br />
              an Account.
            </h1>
          </div>

          <div className="flex flex-col gap-3 m-5">
            <button className="border-1 rounded-lg shadow-md  w-80 p-3">
              <div className="flex justify-evenly">
                <Image className="inline" src={googleLogo} width={26}></Image>
                <p className="text-xl">Continue with Google</p>
              </div>
            </button>
            <button className="border-1 rounded-lg shadow-md w-80 p-3">
              <div className="flex justify-evenly">
                <Image className="inline" src={linkedinLogo} width={26}></Image>
                <p className="text-xl">Continue with Linkedin</p>
              </div>
            </button>
          </div>
        </div>
        <div className=" overflow-hidden w-full basis-6/10 h-max">
          <Image fit className="" src={waves} height={10000}></Image>
        </div>
      </div>
    </div>
  );
};

export default Login;
