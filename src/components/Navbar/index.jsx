import Link from "next/link"
import InputSearch from "./inputSearch"
import { authUserSession } from "@/libs/auth-libs"
import Title from "./title"

const Navbar = async() => {
  const user = await authUserSession()

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between p-5">
      <Title/>
      <div className="z-20">
        <InputSearch user={user} />
      </div>
    </div>
  )
}

export default Navbar
