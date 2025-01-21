/* eslint-disable @typescript-eslint/no-explicit-any */
import UserModel from "@/lib/modals/user.modal";

// create user
export const POST = async (request: Request) => {
  // await Database()
  try {
    const { name, email, image } = await request.json();

    if (!name || !email || !image) {
      return new Response(JSON.stringify({ message: "Field is missing" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailExists = await UserModel.findOne({email});

    if(emailExists){
      return new Response(JSON.stringify({
        message:"User already Exists"
      }),{
        status:400
      })
    }
    
    const user = await UserModel.create({
      name,
      email,
      image,
    });

    return new Response(
      JSON.stringify({ message: "User created successfully", user }),
      {
        status: 201,
      }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Failed to create user",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
