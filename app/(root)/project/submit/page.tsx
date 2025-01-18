import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

const page = async() => {


  const session = await auth()

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


  async function FormHandler(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const image = formData.get("image");
    const details = formData.get("details");

    const data = await fetch(`http://127.0.0.1:3000/api/project`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        title,
        description,
        category,
        image,
        details,
        author:{
          id:user?._id,
          name:user?.name
        }
      })
    })
    

    const response = await data.json());
    
    if(response.success){
      console.log(response.message)
    }


  }

  return (
    <div className="w-full h-screen">
      {/* custom circles */}
      <div className="circle-one absolute w-[200px] h-[200px] bg-[#86EE02] rounded-[50%] blur-[10vh] top-[20%] left-[20%]"></div>

      {/* custom circles */}
      <div className="circle-one absolute w-[300px] h-[300px] bg-[#ffcc35] rounded-[50%] blur-[15vh] top-[60%] right-[20%]"></div>

      <h1 className="text-[10vh] w-full text-center">Submit your peoject 🤖</h1>
      <form
        action={user && FormHandler}
        className="submit-form w-full h-full  flex flex-col items-center gap-5 pt-5"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title of the project"
          className="w-[40%] outline-none font-bold  border-2 border-black h-[7vh] rounded-lg pl-2"
        />

        <textarea
          name="description"
          id="description"
          placeholder="Type the description of the project"
          className="outline-none font-bold  h-[10vh] w-[40%] border-2 border-black rounded-lg pl-2"
        />

        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter the category of the project"
          className="w-[40%] font-bold outline-none border-2 border-black h-[7vh] rounded-lg pl-2"
        />

        <input
          type="text"
          name="image"
          id="image"
          placeholder="Provide the image url link"
          className="w-[40%] font-bold outline-none border-2 border-black h-[7vh] rounded-lg pl-2"
        />

        <textarea
          name="details"
          id="details"
          placeholder="Write the details of the project"
          className="outline-none font-bold  h-[20vh] w-[40%] border-2 border-black rounded-lg pl-2"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default page;
