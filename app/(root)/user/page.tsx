/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import Link from "next/link";

const page = async () => {
  const session = await auth();

  let user = {};
  let project = null;

  if (session?.user) {
    let data = await fetch(
      `http://127.0.0.1:3000/api/user/${session.user.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }
    );
    data = await data.json();
    user = data?.user;

    // Revalidate the user path after fetching user data
  }

  if (user) {
    let data = await fetch(`http://127.0.0.1:3000/api/project/${user?._id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    });
    data = await data.json();
    project = data?.projects;
  }

  return (
    <div className="user-wrapper w-full h-auto flex">
      {/* Left side */}
      <div className="left-side w-[20%] h-[80vh] p-5">
        <div className="user-card w-full h-auto bg-[#88ee02b1] flex flex-col items-center justify-center rounded-[20px] p-5 border-4 border-black hover:scale-105 hover:transition-transform cursor-pointer hover:shadow-3xl">
          {/* user picture */}
          <Avatar className="border-4 border-slate-900  w-[120px] h-[120px] hover:shadow-pic-shadow hover:transition-transform">
            <AvatarImage
              src={`${session?.user ? user?.image : "https://github.com/shadcn.png"}`}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className="text-[18px] mt-2 font-bold">{user?.name}</h1>
          {/* <span className="text-[12px] text-green-800">Web developer</span> */}
          <p className="w-full text-center text-[12px] mt-2">
            {session?.user && user?.bio}
          </p>
          {/* ======================== */}
        </div>
      </div>

      {/* right side */}
      <div className="right-side p-5 w-[80%] h-max">
        <h1 className="text-[5vh] mb-4">All Projects 🤖</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8">
          {/* projects -- section */}

          {project && project.length > 0 ? (
            project.map((project: any) => {
              return (
                <div
                  className="project-box w-auto h-auto rounded-lg p-5 cursor-pointer hover:transition-transform hover:scale-105 hover:shadow-3xl"
                  style={{ border: "4px solid black" }}
                  key={project?._id}
                >
                  <h2 className="text-[20px]">{project?.title}</h2>
                  <p className="text-[12px]">{project?.description}</p>
                  <img
                    src={project?.image ? project?.image : "/image.png"}
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      margin: "5px 0",
                      width: "300px",
                      height: "150px"
                    }}
                  />

                  {/* user-details */}
                  <div className="user-details flex mt-5 justify-between h-auto">
                    <div className="left flex flex-col justify-center">
                      <h3 className="text-[12px]">@{user?.name}</h3>
                    </div>
                    <Link href={`/project/${project._id}`}>
                      {" "}
                      <button className="text-[12px] text-center text-black bg-[#88ee02b1] rounded-[10px] px-[15px] shadow-button shadow-green-800 hover:scale-105 hover:transition-transform h-[4vh]">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}

          {/* projects -- section */}
        </div>
      </div>
    </div>
  );
};

export default page;
