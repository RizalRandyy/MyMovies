import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <Link href={actionURL} className="font-semibold text-md md:text-lg w-32 md:w-40 rounded-md text-center px-5 hover:text-white transition-all"
          style={{ backgroundColor: '#FFB22C' }}>{actionLabel}</Link>
    )
}

export default UserActionButton