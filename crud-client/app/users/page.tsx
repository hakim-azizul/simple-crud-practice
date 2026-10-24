import UserCard from "@/components/Custom/UserCard"
import { iUser } from "@/types/UserType"
import { Button } from "@/components/ui/button"
import Link  from "next/link"
import React from "react"

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/users`)
  const users = await res.json()
  return (
    <div className="container mx-auto p-20">
      <h2 className="my-3 text-2xl font-bold">Total User: <span className="bg-cyan-300 px-3 rounded-md text-black">{users.length}</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: iUser, index: number) => (
          <UserCard key={index} user={user}></UserCard>
        ))}
      </div>
      <Link className="mt-15" href="/users/newUser">
        <Button className="mt-2  cursor-pointer">Add New User</Button>
      </Link>
    </div>
  )
}

export default UsersPage
