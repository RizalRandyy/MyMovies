import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AllGenre from "./allGenre"

const List = () => {
  const [showGenres, setShowGenres] = useState(false)

  const handleListClick = () => {
    setShowGenres(!showGenres)
  }

  return (
    <div>
      <button className="absolute top-2 start-[-30px] md:start-[-40px]" onClick={handleListClick}>
        <FontAwesomeIcon icon={faList} className="hover:text-gray-400 text-lg md:text-xl mt-2.5 md:mt-0 md:mr-4" />
      </button>
      <div className="relative transition-all">
        <AllGenre showGenres={showGenres}/>
      </div>
    </div>
  )
}

export default List