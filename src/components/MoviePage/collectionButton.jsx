"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"
import React, { useState } from "react"

const CollectionButton = ({ movie_id, user_email, isCreated, movie_image, movie_title, movie_release_date, movie_vote_average, movie_popularity }) => {
  const [created, setCreated] = useState(isCreated)

  const handleCollection = async (event) => {
    event.preventDefault()

    const data = { movie_id, user_email, movie_image, movie_title, movie_release_date, movie_vote_average, movie_popularity }

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const collection = await response.json()
    if (collection.status == 200) {
      setCreated(true)
    }
  }

  return (
    <>
      {created
        ?
        <p className="flex items-end justify-end mt-[-50px] md:flex-col text-red-500">
          <FontAwesomeIcon
            icon={faHeartSolid}
            className="md:mb-2 text-3xl" /></p>
        :
        <button className="flex items-end justify-end mt-[-50px] md:flex-col">
          <FontAwesomeIcon
            icon={faHeartRegular}
            className="md:mb-2 text-3xl"
            onClick={handleCollection}
          />
        </button>
      }
    </>
  )
}

export default CollectionButton