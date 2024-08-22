import Link from "next/link";
import { useEffect, useState } from "react";
import { getMovieResponse } from "@/libs/api-libs";

const AllGenre = ({ showGenres }) => {
  const [allGenre, setAllGenre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allGenre = await getMovieResponse(`genre/movie/list?language=en`);

      if (allGenre?.genres) {
        setAllGenre(allGenre.genres);
      }
    };

    fetchData();
  }, []);

  if (!showGenres) return null;

  return (
    <div
      className="absolute top-10 left-0 w-96 border rounded-md shadow-lg z-10 ms-[-60px] md:ms-0"
      style={{ backgroundColor: "#fff6cc" }}
    >
      <h3 className="text-lg font-semibold mb-2 ps-4">Genres</h3>
      <div className="grid grid-cols-4 ps-5">
        {allGenre.map((genre) => (
          <Link
            href={`/genre/${genre.id}`}
            key={genre.id}
            className="pb-2 font-semibold text-sm hover:text-red-500 transition-all"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGenre;
