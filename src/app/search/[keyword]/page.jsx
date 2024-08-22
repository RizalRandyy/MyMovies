import MoviePage from "@/components/MoviePage";
import { getMovieResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";

const Page = async ({ params, searchParams }) => {
  const { keyword } = params;
  const page = searchParams.page || 1;
  const resultKeyword = await getMovieResponse(`search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`)
  const user = await authUserSession()

  const movieIds = resultKeyword.results.map((movie) => movie.id);

  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
      movie_id: {
        in: movieIds,
      },
    },
  });


  const decodedKeyword = decodeURIComponent(keyword);

  return (
    <>
      <h1 className="font-semibold text-xl md:p-4 pb-4 md:pb-0 text-center md:text-start md:justify-start">{`Keyword for ${decodedKeyword}`}</h1>
      <MoviePage api={resultKeyword} page={page} user={user} collection={collection}/>
    </>
  );
};

export default Page;
