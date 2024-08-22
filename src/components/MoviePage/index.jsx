"use client"

import React, { useEffect, useState } from "react";
import Pagination from "../Utilities/Pagination";
import Movie from "./moviePage";
import { useRouter } from "next/navigation";

const MoviePage = ({ api, page, user, collection }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const router = useRouter();

  useEffect(() => {
    router.push(`?page=${currentPage}`, undefined, { shallow: true });
  }, [currentPage]);

  return (
    <>
      <Movie api={api} user={user} collection={collection} />
      <Pagination
        page={currentPage}
        lastPage={api.total_pages}
        setPage={setCurrentPage}
      />
    </>
  );
};

export default MoviePage;
