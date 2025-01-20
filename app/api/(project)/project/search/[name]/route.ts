import Database from "@/lib/db";
import ProjectModel from "@/lib/modals/project.model";

Database()
export const GET = async (
  request: Request,
  { params }: { params: { name: string } }
) => {
  try {
    const param = await params;
    const { name } = param;

    const projects = await ProjectModel.find({
      $or: [
        {
          title: {
            $regex: name,
            $options: "i",
          },
        },
      ],
    });

    if (projects.length < 1) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "post does not exists",
        }),
        {
          status: 400,
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        projects,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to find",
        error: error.message,
      }),
      {
        status: 400,
      }
    );
  }
};
