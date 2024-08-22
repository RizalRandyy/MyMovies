"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Title = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()  
    router.push('/?page=1')
  }

  return (
    <Link href="/?page=1" className="font-semibold text-2xl md:text-3xl" onClick={handleClick}>
      My Movies!
    </Link>
  )
}

export default Title
