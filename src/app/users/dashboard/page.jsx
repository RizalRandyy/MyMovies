import Link from "next/link";
import UserActionButton from "@/components/Navbar/UserActionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFire, faStar } from "@fortawesome/free-solid-svg-icons";
import CollectionButton from "@/components/MoviePage/collectionButton";
import DeleteButton from "@/components/MoviePage/deleteButton";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email
    },
  });

  return (
    <div className="p-5">
      <div className="flex flex-col items-center">
        {user?.image && (
          <Image
            src={user.image}
            alt={user.name}
            width={1080}
            height={1080}
            className="w-52 rounded-full"
          />
        )}
        <h1 className="font-semibold text-xl md:text-2xl mb-2">
          {user ? `${user.name}'s Watched Movies` : "Sign In to Mark Your Watched Movie"}
        </h1>
        <UserActionButton />
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-4">
        {user && collection.map((collect) => {
          return (
            <div
              key={collect.id}
              style={{ backgroundColor: '#fff6cc' }}
              className="text-stone-600 flex flex-col md:flex-col items-center justify-between rounded-lg shadow-lg p-5 md:p-0 h-36 md:h-full hover:scale-105 transition-all"
            >
              <Link
                href={`/movie/${collect.movie_id}`}
                className="flex flex-row md:flex-col md:items-center w-full"
              >
                <div className="flex flex-row md:flex-col items-start justify-start md:items-center md:justify-center w-full h-full">
                  <Image
                    src={collect.movie_image}
                    width={400}
                    height={400}
                    alt="Movies Image"
                    className="w-24 m-[-20px] md:m-0 rounded md:w-80 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col ps-20 md:ps-4 mt-[-120px] md:mt-0 w-full">
                <h3 className="flex font-semibold md:p-4 ps-4 md:ps-0 text-md md:text-lg lg:text-xl md:items-center md:justify-center">
                  {collect.movie_title}
                </h3>
                <div className="text-stone-400 font-semibold text-sm flex flex-col md:flex-row w-full md:w-56 lg:w-72 md:pb-3 p-4 md:justify-between sm:text-xs">
                  <div className="flex flex-row md:flex-col pb-2 md:pb-0 ps-[2px] md:ps-0">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-lg" />
                    <p className="ps-2 md:ps-0">{collect.movie_release_date}</p>
                  </div>
                  <div className="flex flex-row md:flex-col pb-2 md:pb-0">
                    <FontAwesomeIcon icon={faStar} className="text-lg" />
                    <p className="ps-2 md:ps-0">{collect.movie_vote_average}</p>
                  </div>
                  <div className="flex flex-row md:flex-col pb-2 md:pb-0 ps-[2px] md:ps-0">
                    <FontAwesomeIcon icon={faFire} className="text-lg" />
                    <p className="ps-2 md:ps-0">{collect.movie_popularity}</p>
                  </div>
                  {user && <DeleteButton
                    isCreated={true}
                    movie_id={collect.movie_id}
                    user_email={user.email}
                  />}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Page;