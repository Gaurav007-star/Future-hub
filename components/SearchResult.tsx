/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";

const SearchResult = ({
  projects,
  emptyString
}: {
  projects: any;
  emptyString: string;
}) => {

  return (
    <>
      <div className="project-page w-full h-auto flex flex-col pt-[5vh] pb-[5vh] mt-[10vh]">
        {emptyString ? (
          <>
            <h1 className="w-full text-[10vh]">Search Results</h1>

            <div className="project-wrapper flex flex-wrap gap-7 w-full h-auto p-5">
              {projects &&
              typeof projects !== "string" &&
              projects.length > 0 ? (
                projects.map((project: any) => {
                  return (
                    <>
                      <div
                        className="project-box w-[20vw] h-auto rounded-lg p-4 cursor-pointer hover:transition-transform hover:scale-105 hover:shadow-3xl"
                        style={{ border: "4px solid black" }}
                        key={project?._id}
                      >
                        <h2 key={project?._id} className="text-[20px]">{project?.title}</h2>
                        <p key={project?._id} className="text-[14px]">{project?.description}</p>
                        <img key={project?._id}
                          src={project?.image || "https://placehold.co/600x400"}
                          alt="img"
                          style={{
                            width: "500px",
                            height: "250px",
                            borderRadius: "10px",
                            margin: "5px 0"
                          }}
                        />

                        <div
                          className="user-details flex mt-5 h-[5vh] justify-between"
                          key={project?._id}
                        >
                          <div key={project?._id} className="left flex flex-col justify-center">
                            <h3 key={project?._id} className="text-[12px]">
                              @{project?.author.name}
                            </h3>
                          </div>
                          <Link href={`/project/${project._id}`}>
                            {" "}
                            <button key={project?._id} className="text-[12px] text-center text-black bg-[#88ee02b1] rounded-[10px] px-[15px] shadow-button shadow-green-800 hover:scale-105 hover:transition-transform h-[4vh]">
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
                    Not Found *--*
                  </h1>
                </>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchResult;
