import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

const Heart = () => {
  const router = useRouter()

  const handleHeartClick = () => {
    router.push("/users/dashboard")
  }

  return (
    <button className="absolute top-4 md:top-2 md:end-2">
      <FontAwesomeIcon icon={faHeart} className="hover:text-gray-400 text-lg md:text-2xl" onClick={handleHeartClick} />
    </button>
  )
}

export default Heart