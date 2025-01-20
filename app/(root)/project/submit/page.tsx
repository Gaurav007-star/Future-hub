import { auth } from "@/auth";
import SubmitProject from "@/components/SubmitProject";

const page = async () => {
  const session = await auth();

  let user = {};

  if (session?.user) {
    let data = await fetch(
      `http://127.0.0.1:3000/api/user/${session.user.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }
    );
    data = await data.json();
    user = data?.user;
  }

  return <SubmitProject user={user}/>;
};

export default page;
