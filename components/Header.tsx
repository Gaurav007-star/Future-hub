import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  const logoutHandler = async () => {
    "use server";
    await signOut();
  };

  if (session?.user) {
    await fetch("http://127.0.0.1:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image
      })
    });
  }

  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <Link href={"/"}><Image src={"/icon.svg"} alt="icon" width={200} height={200} /></Link>

      <div className="user-details py-5 h-full w-[70%] flex items-center justify-end gap-3 ">
        {session && session?.user ? (
          <>
            <Link href={"/project/submit"}><Button>create</Button></Link>

            <form action={logoutHandler}>
              <Button>logout</Button>
            </form>

            <Link href={"/user"}>
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
            </Link>
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
