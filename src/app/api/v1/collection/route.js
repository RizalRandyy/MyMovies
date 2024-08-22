import prisma from "@/libs/prisma"

export async function POST(request) {
  const { movie_id, user_email, movie_image, movie_title, movie_release_date, movie_vote_average, movie_popularity } = await request.json()
  const data = { movie_id, user_email, movie_image, movie_title, movie_release_date, movie_vote_average, movie_popularity }

  const createCollection = await prisma.collection.create({ data })
  if (!createCollection) return Response.json({ status: 500, isCreated: false })
  else return Response.json({ status: 200, isCreated: true }) 
}

export async function DELETE(request) {
  const { movie_id, user_email } = await request.json();

  const deleteCollection = await prisma.collection.deleteMany({
    where: {
      movie_id: movie_id,
      user_email: user_email,
    },
  });

  if (deleteCollection.count === 0) {
    return new Response(JSON.stringify({ status: 500, message: "Failed to delete collection" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ status: 200, message: "Collection deleted successfully" }), {
    status: 200,
  });
}