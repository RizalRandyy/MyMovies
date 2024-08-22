import Image from "next/image"

const UserImage = ({ user }) => {
  if(!user) return null

  return (
    <div>
      <Image
        src={user?.image}
        alt="User Profile Image"
        width={1080} 
        height={1080}
        className="w-10 h-auto rounded-full absolute top-2 end-[-35px] md:top-0 md:end-2"
      />
    </div>
  )
}

export default UserImage