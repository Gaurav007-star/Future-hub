import Database from "@/lib/db";
import UserModel from "@/lib/modals/user.modal";


export const GET = async (request:Request , { params }: { params: { email: string } }) => {
  try {
    await Database()
   const param = await params;
    const {email} = param;

    const emailExists = await UserModel.findOne({ email });

    if (emailExists) {
      return new Response(
        JSON.stringify({
          success: true,
          user: emailExists,
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: "User not found",
      })
    );


  } catch (error) {
    const errorMsg = error instanceof Error && error.message;
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to get user data",
        error: errorMsg,
      })
    );
  }
};
