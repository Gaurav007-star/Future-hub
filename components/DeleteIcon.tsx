/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const DeleteIcon = ({id}:{id:any}) => {

    const router = useRouter()

    const DeleteHandler = async() =>{
        try {
            const response = await axios.get(`http://127.0.0.1:3000/api/project/delete/${id}`);
            toast.success(response.data.message)
            router.refresh()
            
        } catch (error:any) {
            toast.success(error.response.data.message)
        }
    }

  return (
    <>
      <RiDeleteBin6Line onClick={DeleteHandler} className="hover:scale-105 transition-shadow hover:text-red-500" />
    </>
  );
};

export default DeleteIcon;
