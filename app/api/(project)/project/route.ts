/* eslint-disable @typescript-eslint/no-explicit-any */
import Database from "@/lib/db";
import ProjectModel from "@/lib/modals/project.model";
Database();

// get all projects
export const GET = async () => {
  try {
    const projects = await ProjectModel.find();
    if (projects.length < 1) {
      return new Response(
        JSON.stringify({
          message: "Project not found",
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
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        messahe: `Failed to fetch data`,
        error: error.message,
      })
    );
  }
};

// create project
export const POST = async (request: Request) => {
  try {
    const { title, author, category, image, details,description } = await request.json();

    if (!title || !author || !category || !image || !details || !description) {
      return new Response(
        JSON.stringify({
          message: "Empty Field found",
        }),
        {
          status: 400,
        }
      );
    }    

    const findTitle = await ProjectModel.findOne({ title });
    if (findTitle) {
      return new Response(
        JSON.stringify({
          message: "Provide a unique title",
        }),
        {
          status: 400,
        }
      );
    }

    await ProjectModel.create({
      title,
      author,
      category,
      image,
      details,
      description
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Project create successfully 🙃",
      })
    );
  } catch (error: any) {
    let errMsg = error instanceof Error ? error.message : 'Backend error'
    errMsg = errMsg.replace("Project validation failed: ","")
    return new Response(
      JSON.stringify({
        error: `Failed to create data`,
        message: errMsg,
      }),
      {
        status: 400,
      }
    );
  }
};
