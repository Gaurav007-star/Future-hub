import ProjectModel from "@/lib/modals/project.model";

// find post based on user
export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const userPosts = await ProjectModel.find({
      author: id,
    });
  } catch (error) {}
};
