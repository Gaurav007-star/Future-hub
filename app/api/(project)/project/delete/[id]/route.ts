import Database from "@/lib/db";
import ProjectModel from "@/lib/modals/project.model";
Database()
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const param = await params;
    const { id } = param;

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "ID parameter is missing.",
        }),
        { status: 400 }
      );
    }

    const deletedPreoject = await ProjectModel.deleteOne({ _id: id });

    if (!deletedPreoject) {
      return new Response(
        JSON.stringify({
          message: "Project not found 😗",
        }),
        { status: 400 }
      );
    }

    // Respond with the found projects
    return new Response(
      JSON.stringify({
        success: true,
        message: "Project deleted 😁",
      }),
      { status: 200 }
    );
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Backend error";

    return new Response(
      JSON.stringify({
        success: false,
        message: `Error found`,
        error: errMsg,
      })
    );
  }
};
