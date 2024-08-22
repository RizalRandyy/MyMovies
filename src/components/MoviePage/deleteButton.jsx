"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ movie_id, user_email, isCreated }) => {
  const [created, setCreated] = useState(isCreated);
  const router = useRouter()

  const handleRemoveFromCollection = async (event) => {
    event.preventDefault();

    const data = { movie_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "DELETE",
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === 200) {
      setCreated(false);
    }
    router.refresh()
  };

  return (
    <>
      {created ? (
        <button
          className="flex items-end justify-end mt-[-50px] md:flex-col text-red-500"
          onClick={handleRemoveFromCollection}
        >
          <FontAwesomeIcon icon={faHeartSolid} className="md:mb-2 text-3xl" />
        </button>
      ) : (
        <button
          className="flex items-end justify-end mt-[-50px] md:flex-col"
          disabled
        >
          <FontAwesomeIcon icon={faHeartRegular} className="md:mb-2 text-3xl" />
        </button>
      )}
    </>
  );
};

export default DeleteButton;
