import Database from "@/lib/db";
import ProjectModel from "@/lib/modals/project.model";

export const GET = async (
  request: Request,
  { params }: { params: { pid: string } }
) => {
  try {
    // Initialize database connection
    await Database();
    const param = await params;
    const { pid } = param;

    // Validate the presence of the ID
    if (!pid) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "ID parameter is missing.",
        }),
        { status: 400 }
      );
    }

    // Fetch projects for the user
    const projects = await ProjectModel.findOne({
      _id:pid,
    });

  
    // Handle case where no projects are found
    if (!projects) {
      return new Response(
        JSON.stringify({
          message: "Project not found 😒",
        }),
        { status: 400 }
      );
    }

    // Respond with the found projects
    return new Response(
      JSON.stringify({
        success: true,
        projects,
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
