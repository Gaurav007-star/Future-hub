/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

const Projects = () => {
  const data = [{}, {}, {}, {}, {}, {}];

  return (
    <div className="peoject-page w-full h-auto flex flex-col pt-[5vh] pb-[5vh]">
      <h1 className="w-full text-[10vh]">Trendy Projects</h1>
      <div className="project-wrapper flex flex-wrap gap-7 w-full h-auto p-5">
        {data.map((index:any) => {
          return (
            <>
              <div
                className="project-box w-[20vw] h-auto rounded-lg p-4 cursor-pointer hover:transition-transform hover:scale-105 hover:shadow-3xl"
                style={{ border: "4px solid black" }}
                key={index}
              >
                <h2 className="text-[20px]">Project 1</h2>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, amet?
                </p>
                <Image
                  src={"/image.png"}
                  alt="img"
                  width={500}
                  height={500}
                  style={{ borderRadius: "10px", margin: "5px 0" }}
                />

                {/* user-details */}
                <div className="user-details flex mt-5 justify-between">
                  <div className="left flex flex-col justify-center">
                    <h3 className="text-[12px]">tomotomo</h3>
                    <span className="text-[12px]">@tomo123</span>
                  </div>
                  <button className="bg-slate-800 text-white rounded-[10px] px-[15px] hover:scale-105 hover:transition-transform">
                    Details
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
