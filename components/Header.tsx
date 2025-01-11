import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <Image src={"/icon.svg"} alt="icon" width={200} height={200} />

      <div className="user-details py-5 h-full w-[70%] flex items-center justify-end gap-3 ">
        <Button>create</Button>

        <Button>logout</Button>

        <Image
          src={"/image.png"}
          alt="img"
          width={55}
          height={10}
          style={{
            borderRadius: "50%",
            padding: "2px",
            border: "2px solid #04311d",
            cursor:"pointer"
          }}
        />
      </div>
    </div>
  );
};

export default Header;
