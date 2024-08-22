"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Heart from "./heart";
import List from "./list";
import { useRouter, usePathname } from "next/navigation";

const InputSearch = ({ user }) => {
  const searchRef = useRef();
  const router = useRouter()
  const currentPath = usePathname();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const encodeKeyword = encodeURIComponent(keyword.trim());
      router.push(`/search/${encodeKeyword}`);
    }
  };

  return (
    <div className="relative">
      <List />
      <input
        id="input"
        placeholder="cari film..."
        className="w-64 md:w-96 mr-3 md:mr-14 p-2 md:mt-0 mt-2 rounded-md font-semibold"
        style={{ backgroundColor: '#F6EACB' }}
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-8 md:end-12">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-gray-400 text-lg md:text-xl mt-2.5 md:mt-0 md:mr-4" onClick={handleSearch} />
      </button>
      {currentPath === "/users/dashboard" ? null : <Heart />}
    </div>
  );
};

export default InputSearch;
