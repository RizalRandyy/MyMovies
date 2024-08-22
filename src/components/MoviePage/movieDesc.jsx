import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MovieDesc = ({ resultId }) => {
  const releaseYear = resultId.release_date.split("-")[0]
  const rating = Math.round(resultId.vote_average)

  if (!resultId) {
    return <p className="flex items-center font-semibold text-3xl justify-center w-full mt-52">Loading...</p>;
  }

  const renderHearts = () => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faSolidStar} className="text-red-500" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faRegularStar} className="text-red-500" />);
      }
    }
    return stars;
  };

  const renderGenres = () => {
    return resultId.genres.map((genre, index) => (
      <Link key={index} href={`/genre/${genre.id}`} className="grid grid-cols-4 md:inline-block md:px-2 hover:text-red-500">
        {genre.name}
      </Link>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <Image
        src={`https://image.tmdb.org/t/p/w400${resultId.poster_path}`}
        width={400}
        height={400}
        alt="movie backdrop"
        className="w-full md:w-3/12 rounded pb-4"
      />
      <div className="flex flex-col md:ps-4">
        <h1 className="font-semibold text-3xl">{`${resultId.title} (${releaseYear})`}</h1>
        <h2 className="font-medium text-2xl">{resultId.tagline}</h2>
        <div className="p-2 md:p-4 flex items-center">
          <p className="font-semibold text-3xl">{resultId.vote_average}</p>
          <div className="flex flex-col items-start ps-3">
            <div className="flex space-x-2 pb-1">{renderHearts()}</div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-sm ps-0.5" />
              <p className="ps-2 font-semibold text-sm">{resultId.vote_count}</p>
            </div>
          </div>
        </div>
        <div className="flex font-bold text-xl space-x-4 pb-4">{renderGenres()}</div>
        <p className="font-semibold text-2xl">Synopsis</p>
        <hr className="border-t-2 border-gray-950 w-full my-2" />
        <p className="font-semibold text-xl">{resultId.overview}</p>
        <footer
          className="mt-4 relative h-64 block md:hidden rounded-md"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${resultId.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
        </footer>
      </div>
    </div>
  )
}

export default MovieDesc
