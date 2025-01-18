/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import React from "react";

const Projects = async () => {
  const session = await auth();

  const fetchData = await fetch("http://127.0.0.1:3000/api/project", {
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
          <div className="peoject-page w-full h-auto flex flex-col pt-[5vh] pb-[5vh]">
            <h1 className="w-full text-[10vh]">Trendy Projects</h1>
            <div className="project-wrapper flex flex-wrap gap-7 w-full h-auto p-5">
              {data && data.projects.length > 0 ? (
                data.projects.map((project: any, index: any) => {
                  return (
                    <>
                      <div
                        className="project-box w-[20vw] h-auto rounded-lg p-4 cursor-pointer hover:transition-transform hover:scale-105 hover:shadow-3xl"
                        style={{ border: "4px solid black" }}
                        key={project?.id}
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
                          <div className="left flex flex-col justify-center">
                            <h3 className="text-[12px]">@{project?.author.name}</h3>
                          </div>
                          <button className="bg-slate-800 text-white rounded-[10px] px-[15px] hover:scale-105 hover:transition-transform">
                            Details
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <h1 className="w-full text-[7vh] bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
                    We don't has any projects right now *-*
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
