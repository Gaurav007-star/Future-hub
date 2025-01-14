import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { auth, signIn, signOut } from "@/auth";

const Header = async () => {
  const session = await auth();

  const logoutHandler = async () => {
    "use server";
    await signOut();
  };

  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <Image src={"/icon.svg"} alt="icon" width={200} height={200} />

      <div className="user-details py-5 h-full w-[70%] flex items-center justify-end gap-3 ">
        {session && session?.user ? (
          <>
            <Button>create</Button>

            <form action={logoutHandler}>
              <Button>logout</Button>
            </form>

            <Image
              src={`${
                session && session?.user ? session.user?.image : "/image.png"
              }`}
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
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button>Login</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Header;
