import MoviePage from "@/components/MoviePage";
import { getMovieResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";


const Page = async ({ searchParams }) => {
  const page = searchParams.page || 1;
  const api = await getMovieResponse(`movie/popular?language=en-US&page=${page}`);
  const user = await authUserSession()

  const movieIds = api.results.map((movie) => movie.id);

  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
      movie_id: {
        in: movieIds,
      },
    },
  });

  return <MoviePage api={api} page={page} user={user} collection={collection}/>;
};

export default Page