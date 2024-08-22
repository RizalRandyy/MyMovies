"use client"

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar, faFire } from "@fortawesome/free-solid-svg-icons";
import CollectionButton from "./collectionButton";

const Movie = ({ api, user, collection }) => {

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-4">
        {api.results?.map((movie) => {
          const imageUrl = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
          const title = movie.title || movie.name;
          if (!movie.poster_path) return null;

          const isInCollection = collection?.some((item) => item.movie_id === movie.id);

          return (
            <div
              key={movie.id}
              style={{ backgroundColor: '#fff6cc' }}
              className="text-stone-600 flex flex-col md:flex-col items-center justify-between rounded-lg shadow-lg p-5 md:p-0 h-36 md:h-full hover:scale-105 transition-all"
            >
              <Link
                href={`/movie/${movie.id}`}
                className="flex flex-row md:flex-col md:items-center w-full"
              >
                <div className="flex flex-row md:flex-col items-start justify-start md:items-center md:justify-center w-full h-full">
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt="Movies Image"
                    className="w-24 m-[-20px] md:m-0 rounded md:w-80 object-cover z-10 md:z-0"
                  />
                </div>
              </Link>
              <div className="flex flex-col ps-20 md:ps-4 mt-[-120px] md:mt-0 w-full">
                <h3 className="flex font-semibold md:p-4 ps-4 md:ps-0 text-md md:text-lg lg:text-xl md:items-center md:justify-center">
                  {title}
                </h3>
                <div className="text-stone-400 font-semibold text-sm flex flex-col md:flex-row w-full md:w-56 lg:w-72 md:pb-3 p-4 md:justify-between sm:text-xs">
                  <div className="flex flex-row md:flex-col pb-2 md:pb-0 ps-[2px] md:ps-0">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-lg" />
                    <p className="ps-2 md:ps-0">{movie.release_date}</p>
                  </div>
                  <div className="flex flex-row md:flex-col pb-2 md:pb-0">
                    <FontAwesomeIcon icon={faStar} className="text-lg" />
                    <p className="ps-2 md:ps-0">{movie.vote_average}</p>
                  </div>
                  <div className="flex flex-row md:flex-col pb-2 md:pb-0 ps-[2px] md:ps-0">
                    <FontAwesomeIcon icon={faFire} className="text-lg" />
                    <p className="ps-2 md:ps-0">{movie.popularity}</p>
                  </div>
                  {user && <CollectionButton
                    movie_id={movie.id}
                    user_email={user?.email}
                    isCreated={isInCollection}
                    movie_image={imageUrl}
                    movie_title={title}
                    movie_release_date={movie.release_date.toString()}
                    movie_vote_average={movie.vote_average.toString()}
                    movie_popularity={movie.popularity.toString()}
                  />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
