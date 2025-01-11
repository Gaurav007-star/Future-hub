import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="user-wrapper w-full h-auto flex">

        {/* Left side */}
      <div className="left-side w-[20%] h-[80vh] p-5">
        <div className="user-card w-full h-auto bg-[#88ee02b1] flex flex-col items-center justify-center rounded-[20px] p-5 border-4 border-black hover:scale-105 hover:transition-transform cursor-pointer hover:shadow-3xl">
          {/* user picture */}
          <Avatar className="border-4 border-slate-900  w-[120px] h-[120px] hover:shadow-pic-shadow hover:transition-transform">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className="text-[18px] mt-2 font-bold">Gaurav Sarkar</h1>
          <span className="text-[12px] text-green-800">Web developer</span>
          <p className="w-full text-center text-[12px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dolorum.
          </p>
          <Button className="mt-4">Details</Button>
          {/* ======================== */}
        </div>
      </div>

      {/* right side */}
      <div className="right-side p-5 w-[80%] h-max">
        <h1 className="text-[5vh] mb-4">All Projects 🤖</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8">
          {/* projects -- section */}
          <div
            className="project-box w-auto h-auto rounded-lg p-5 cursor-pointer hover:transition-transform hover:scale-105 hover:shadow-3xl"
            style={{ border: "4px solid black" }}
          >
            <h2 className="text-[20px]">Project 1</h2>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              amet?
            </p>
            <Image
              src={"/image.png"}
              alt="img"
              width={300}
              height={300}
              style={{ borderRadius: "10px", margin: "5px 0" }}
            />

            {/* user-details */}
            <div className="user-details flex mt-5 justify-between">
              <div className="left flex flex-col justify-center">
                <h3 className="text-[12px]">tomotomo</h3>
                <span className="text-[12px]">@tomo123</span>
              </div>
              <button className="text-[12px] text-center text-black bg-[#88ee02b1] rounded-[10px] px-[15px] shadow-button shadow-green-800 hover:scale-105 hover:transition-transform">
                Details
              </button>
            </div>

          </div>
          {/* projects -- section */}
        </div>
      </div>

    </div>
  );
};

export default page;
