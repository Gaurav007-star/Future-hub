/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const View = ({ id, project }: { id: string; project: any }) => {
  const router = useRouter();
  const hasRun = useRef(false); // Persist state across renders

  useEffect(() => {
    if (hasRun.current) return; // Skip if the effect has already run
    hasRun.current = true;

    async function UpdateView() {
      await fetch(`http://localhost:3000/api/project/view/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      router.refresh();
    }

    UpdateView();
  }, [id, router]);

  return (
    <span className="text-[12px]"> Views : {project?.projects?.views}</span>
  );
};

export default View;
