import MoviePage from "@/components/MoviePage";
import { getMovieResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";

const Page = async ({ params: { id }, searchParams: { page = 1 } }) => {
  const genreData = await getMovieResponse(
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`
  );

  const { genres } = await getMovieResponse(`genre/movie/list?language=en`);
  const genreName = genres.find((genre) => genre.id === parseInt(id))?.name || "Unknown Genre";
  const user = await authUserSession()

  const movieIds = genreData.results.map((movie) => movie.id);

  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
      movie_id: {
        in: movieIds,
      },
    },
  });

  return (
    <>
      <p className="p-5 font-semibold text-lg md:text-xl">
        {`Result for Genre: ${genreName}`}
      </p>
      <MoviePage api={genreData} page={page} collection={collection} user={user}/>
    </>
  );
};

export default Page;
