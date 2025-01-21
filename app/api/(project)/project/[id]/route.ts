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
    const projects = await ProjectModel.find({
      'author.id':id,
    });

  
    // Handle case where no projects are found
    if (projects.length < 1) {
      return new Response(
        JSON.stringify({
          message: "Hurry up, create a project first. 😒",
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
        error:error instanceof Error ? error.message : 'Backend error'
      }),
      { status: 400 }
    );
  }
};
