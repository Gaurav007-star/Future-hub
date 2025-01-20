"use client";

import React, { ChangeEvent, useId, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import SearchResult from "./SearchResult";
import axios from "axios";
import { useRouter } from "next/navigation";

const Search = ({ check }: { check: boolean }) => {
  const [text, setText] = useState<string>("");
  const [projects, setProjects] = useState<[] | string>([]);
  const router = useRouter();

  const unid = useId();

  const SearchApiCall = async (value: string) => {
    await axios
      .get(`http://127.0.0.1:3000/api/project/search/${value}`)
      .then((res) => {
        setProjects(res.data?.projects);
      })
      .catch((err) => {
        console.log(`Error found`, err.message);
        setProjects(err.message);
      })
      .finally(() => {
        return router.refresh();
      });
  };

  const searchHandler = (value: string) => {
    setText(value);
    SearchApiCall(value);
  };

  return (
    <>
      <form className="seach-form relative w-[50%] h-[12%] mt-5 rounded-xl">
        <input
          type="text"
          name="search"
          id="search"
          value={text}
          className="w-full h-[10vh] rounded-xl pl-5 text-xl outline-none"
          style={{ border: "4px solid black" }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            searchHandler(e.target.value)
          }
          disabled={check}
        />

        {/* icon section */}
        {false ? (
          <RxCross2
            size={30}
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              translate: "-50% -50%",
              cursor: "pointer"
            }}
          />
        ) : (
          <RiSearchLine
            size={30}
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              translate: "-50% -50%",
              cursor: "pointer"
            }}
          />
        )}
      </form>
      {projects.length > 0 ? (
        <SearchResult projects={projects} key={unid} emptyString={text} />
      ) : (
        <SearchResult projects={projects} key={unid} emptyString={text} />
      )}
    </>
  );
};

export default Search;
