import { auth } from "@/auth";
import Projects from "@/components/Projects";
import Search from "@/components/Search";
import Database from "@/lib/db";
// import Form from "next/form";
// import { RiSearchLine } from "react-icons/ri";
// import { RxCross2 } from "react-icons/rx";
Database();

export default async function Home() {
  // Database conection
  const session = await auth();

  return (
    <>
      <div className="root-page w-full h-[45vh] flex flex-col items-center justify-end">
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
      </div>

      {/* form section */}
      <div className="search-section w-full h-max flex flex-col items-center justify-center">
        <Search check={session?.user ? false : true} />
      </div>

      {/* project section */}
      <Projects />
    </>
  );
}
