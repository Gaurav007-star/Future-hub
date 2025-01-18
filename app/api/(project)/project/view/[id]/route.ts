import Database from "@/lib/db";
import ProjectModel from "@/lib/modals/project.model";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    // Initialize database connection
    await Database();
    const param = await params;
    const { id } = param;

    // Validate the presence of the ID
    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "ID parameter is missing.",
        }),
        { status: 400 }
      );
    }

    // Fetch projects for the user
    const projects = await ProjectModel.updateOne(
      {
        _id: id,
      },

      { $inc: { views: 1 } }
    );

    // Respond with the found projects
    return new Response(
      JSON.stringify({
        success: true,
        message:"update successfully"
      }),
      { status: 200 }
    );
  } catch (error) {
    // Handle errors gracefully
    return new Response(
      JSON.stringify({
        success: false,
        message: "Provide correct parameter",
      }),
      { status: 400 }
    );
  }
};
