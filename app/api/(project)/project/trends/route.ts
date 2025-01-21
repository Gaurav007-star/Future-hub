import Database from "@/lib/db";
import ProjectModel from "@/lib/modals/project.model";
Database()

export const GET = async () => {
  try {
    const trendsData = await ProjectModel.find().sort({ views: -1 });

    if (trendsData.length < 1) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "We don't have any projects right now *u*",
        })
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        projects: trendsData,
      })
    );
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Backend error";
    return new Response(
      JSON.stringify({
        success: false,
        message: errMsg,
      })
    );
  }
};
