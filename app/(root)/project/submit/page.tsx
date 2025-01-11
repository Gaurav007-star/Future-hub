"use client";

import { Button } from "@/components/ui/button";
import MDEditor from "@uiw/react-md-editor";

const page = () => {
  return (
    <div className="w-full h-screen">
      {/* custom circles */}
      <div className="circle-one absolute w-[200px] h-[200px] bg-[#86EE02] rounded-[50%] blur-[10vh] top-[20%] left-[20%]"></div>

      {/* custom circles */}
      <div className="circle-one absolute w-[300px] h-[300px] bg-[#ffcc35] rounded-[50%] blur-[15vh] top-[60%] right-[20%]"></div>

      <h1 className="text-[10vh] w-full text-center">Submit your peoject 🤖</h1>
      <form
        action="/"
        className="submit-form w-full h-full  flex flex-col items-center gap-5 pt-5"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title of the project"
          className="w-[40%] outline-none font-bold  border-2 border-black h-[7vh] rounded-lg pl-2"
        />

        <textarea
          name="details"
          id="details"
          placeholder="Type the details of the project"
          className="outline-none font-bold  h-[20vh] w-[40%] border-2 border-black rounded-lg pl-2"
        />

        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter the category of the project"
          className="w-[40%] font-bold outline-none border-2 border-black h-[7vh] rounded-lg pl-2"
        />

        <input
          type="text"
          name="image"
          id="image"
          placeholder="Provide the image url link"
          className="w-[40%] font-bold outline-none border-2 border-black h-[7vh] rounded-lg pl-2"
        />

        <MDEditor
          id="details"
          preview="edit"
          textareaProps={{
            placeholder: "DEscribe your project in details..."
          }}
          previewOptions={{
            disallowedElements: ["style"]
          }}
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "white",
            width: "40%"
          }}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default page;
