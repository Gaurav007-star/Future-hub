"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

type ProjectData = {
  title: string;
  description: string;
  category: string;
  image: string;
  details: string;
};

const SubmitProject = ({ user }: { user: any }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<ProjectData>({
    title: "",
    description: "",
    category: "",
    image: "",
    details: ""
  });

  useEffect(() => {}, [loading]);

  const setDataHandler = (name: string, value: string) => {
    setProjectData({ ...projectData, [name]: value });
  };

  const FormHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`http://127.0.0.1:3000/api/project`, {
        title: projectData.title,
        description: projectData.description,
        category: projectData.category,
        image: projectData.image,
        details: projectData.details,
        author: {
          id: user?._id,
          name: user?.name
        }
      });

      toast.success(response.data.message);
      setLoading(false);

      setProjectData({
        title: "",
        description: "",
        category: "",
        image: "",
        details: ""
      });
    } catch (error: any) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen">
      {/* custom circles */}
      <div className="circle-one absolute w-[200px] h-[200px] bg-[#86EE02] rounded-[50%] blur-[10vh] top-[20%] left-[20%]"></div>

      {/* custom circles */}
      <div className="circle-one absolute w-[300px] h-[300px] bg-[#ffcc35] rounded-[50%] blur-[15vh] top-[60%] right-[20%]"></div>

      <h1 className="text-[10vh] w-full text-center">Submit your peoject 🤖</h1>
      <form
        onSubmit={(e) => FormHandler(e)}
        className="submit-form w-full h-full  flex flex-col items-center gap-5 pt-5 "
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title of the project"
          className="w-[40%] outline-none font-bold  border-2 border-black h-[7vh] rounded-lg pl-2 z-10 bg-transparent"
          onChange={(e) => setDataHandler(e.target.name, e.target.value)}
          value={projectData.title}
        />

        <textarea
          name="description"
          id="description"
          placeholder="Type the description of the project"
          className="outline-none font-bold  h-[10vh] w-[40%] border-2 border-black rounded-lg pl-2 z-10 bg-transparent"
          onChange={(e) => setDataHandler(e.target.name, e.target.value)}
          value={projectData.description}
        />

        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter the category of the project"
          className="w-[40%] font-bold outline-none border-2 border-black h-[7vh] rounded-lg pl-2 z-10 bg-transparent"
          onChange={(e) => setDataHandler(e.target.name, e.target.value)}
          value={projectData.category}
        />

        <input
          type="text"
          name="image"
          id="image"
          placeholder="Provide the image url link"
          className="w-[40%] font-bold outline-none border-2 border-black h-[7vh] rounded-lg pl-2 z-10 bg-transparent"
          onChange={(e) => setDataHandler(e.target.name, e.target.value)}
          value={projectData.image}
        />

        <textarea
          name="details"
          id="details"
          placeholder="Write the details of the project"
          className="outline-none font-bold  h-[20vh] w-[40%] border-2 border-black rounded-lg pl-2 z-10 bg-transparent"
          onChange={(e) => setDataHandler(e.target.name, e.target.value)}
          value={projectData.details}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default SubmitProject;
