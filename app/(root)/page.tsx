import Projects from "@/components/Projects";
import Database from "@/lib/db";
import Form from "next/form";
import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  // Database conection
  Database()
  
  return (
    <>
      <div className="root-page w-full h-[80vh] flex flex-col items-center justify-center">
        <div className="circle-one absolute w-[200px] h-[200px] bg-[#86EE02] rounded-[50%] blur-[10vh] top-[20%] left-[200px]"></div>

        <div className="circle-one absolute w-[300px] h-[300px] bg-[#ffcc35] rounded-[50%] blur-[15vh] top-[60%] right-[100px]"></div>

        {/* heading */}
        <h1 className="text-[10vh] font-semibold">
          Welcome to{" "}
          <span
            className="text-[#86EE02]  "
            style={{ WebkitTextStroke: "1px", WebkitTextStrokeColor: "black" }}
          >
            Future
          </span>{" "}
          Hub
        </h1>

        {/* paragraph tag */}
        <p className="text-[20px] font-bold tracking-[5px]">
          where future meets with crazy ideads
        </p>

        {/* form section */}
        <Form
          action={"/"}
          className="seach-form relative w-[50%] h-[12%] bg-red-400 mt-5 rounded-xl"
        >
          <input
            type="text"
            name="search"
            id="search"
            className="w-full h-full rounded-xl pl-5 text-xl outline-none"
            style={{ border: "4px solid black" }}
          />

          {/* icon section */}
          {false ? (
            <RxCross2
              size={30}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                translate: "-50% -50%",
                cursor: "pointer"
              }}
            />
          ) : (
            <RiSearchLine
              size={30}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                translate: "-50% -50%",
                cursor: "pointer"
              }}
            />
          )}
        </Form>
      </div>

      {/* project section */}
      <Projects />
    </>
  );
}
