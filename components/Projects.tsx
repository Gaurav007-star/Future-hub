/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";

const Projects = async () => {
  const session = await auth();

  const fetchData = await fetch("http://127.0.0.1:3000/api/project/trends", {
    method: "GET",
    headers: {
      "conetent-type": "application/json"
    }
  });

  const data = await fetchData.json();

  return (
    <>
      {session && session?.user ? (
        <>
          {/* Trendy projects */}
          <div className="peoject-page w-full h-auto flex flex-col pt-[5vh] pb-[5vh] ">
            <h1 className="w-full lg:text-[10vh] sm:text-[10vh] mb-4">
              Trendy Projects
            </h1>
            <div className="project-wrapper grid sm:grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
              {data && data.projects.length > 0 ? (
                data.projects.map((project: any) => {
                  return (
                    <>
                      <div
                        className="project-box w-auto h-auto rounded-lg p-4 cursor-pointer hover:transition-transform hover:scale-105 hover:shadow-3xl"
                        style={{ border: "4px solid black" }}
                        key={project?._id}
                      >
                        <h2 className="text-[20px]">{project?.title}</h2>
                        <p className="text-[14px]">{project?.description}</p>
                        <img
                          src={project?.image || "https://placehold.co/600x400"}
                          alt="img"
                          style={{
                            width: "500px",
                            height: "250px",
                            borderRadius: "10px",
                            margin: "5px 0"
                          }}
                        />

                        {/* user-details */}
                        <div className="user-details flex mt-5 h-[5vh] justify-between">
                          <div className="left flex flex-col justify-center items-center">
                            <h3 className="text-[12px]">
                              @{project?.author.name}
                            </h3>
                            <span className="text-[12px] text-slate-400">
                              Views :{project?.views}{" "}
                            </span>
                          </div>
                          <Link href={`/project/${project._id}`}>
                            {" "}
                            <button className="text-[12px] text-center text-black bg-[#88ee02b1] rounded-[10px] px-[15px] shadow-button shadow-green-800 hover:scale-105 hover:transition-transform h-[4vh]">
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <h1 className="w-full text-[7vh] bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
                    We don&apos;t has any projects right now *-*
                  </h1>
                </>
              )}
            </div>
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Projects;
