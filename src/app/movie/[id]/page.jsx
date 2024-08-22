import MovieDesc from "@/components/MoviePage/movieDesc";
import { getMovieResponse } from "@/libs/api-libs";


const Page = async ({ params: { id } }) => {
  const resultId = await getMovieResponse(`movie/${id}?language=en-US`)

  return (
    <>
      <MovieDesc resultId={resultId}/>
    </>
  );
};

export default Page;
