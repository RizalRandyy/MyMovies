export const getMovieResponse = async (resource) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/${resource}`, options);
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return null
  }
}

