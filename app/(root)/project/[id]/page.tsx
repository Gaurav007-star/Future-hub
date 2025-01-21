/* eslint-disable @next/next/no-img-element */

import View from "@/components/View";
import Link from "next/link";
import React from "react";


const page = async ({ params }: { params: { id: string } }) => {

  const { id } = params;

  let project = {};
  let user = {};

  async function CallProject() {
    let data = await fetch(`http://localhost:3000/api/get-project/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    });

    data = await data.json();
    return data;
  }

  project = await CallProject();

  if (project) {
    let data = await fetch(
      `http://127.0.0.1:3000/api/getuser/${project?.projects?.author.id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }
    );

    data = await data.json();
    user = data?.user;
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={
          (project && project?.projects?.image) ||
          "https://placehold.co/600x400"
        }
        alt="loading..."
        className="w-[70vw] h-[85vh] rounded-[50px] border-4 border-black cursor-pointer mt-2 shadow-lg"
      />

      <div className="user-details w-[70vw] h-auto flex justify-between my-5 px-5">
        <div className="left">
          <h1 className="text-[5vh] text-green-500">
            {project?.projects?.title}
          </h1>
          <View id={project?.projects._id} project={project}/>
          <h3 className="text-[2vh]">{project?.projects?.description}</h3>
        </div>
        <div className="right flex gap-3 items-center">
          <span>@{project?.projects?.author?.name}</span>
          <Link href={"/user"}>
            <img
              src={`${user ? user?.image : "/image.png"}`}
              alt="img"
              width={55}
              height={10}
              style={{
                borderRadius: "50%",
                padding: "2px",
                border: "2px solid #04311d",
                cursor: "pointer"
              }}
            />
          </Link>
        </div>
      </div>

      <article className="w-[70vw] h-auto my-5">
        {project?.projects?.details}
      </article>
    </div>
  );
};

export default page;
