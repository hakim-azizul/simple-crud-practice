"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { iUser } from "@/types/UserType"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import React from "react"

interface iUserCardProps {
  user: iUser
}

const UserCard = ({ user }: iUserCardProps) => {

  const {_id, name} = user;
  const router = useRouter();
  const handleDeleteUser = async(_id: string)=>{
    const res = await fetch(`http://localhost:5000/users/${_id}`,{
      method: 'DELETE'
    })
    const afterDelete = await res.json();
    if (afterDelete.deletedCount > 0){
      console.log(`${name}, deleted successfully`)
      router.refresh();
    }
  }
  
  return (
    <div>
      <Card className="pt-0">
        <CardHeader>
          <CardAction className="pt-3">
            <h2>No Action</h2>
          </CardAction>
          <CardTitle className="pt-3 text-cyan-300">{user.name}</CardTitle>
          <CardDescription className="text-cyan-300">{user.email}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link className="w-full" href={`/users/${user._id}`}>
            <Button className="cursor-pointer bg-green-400">View Details</Button>
          </Link>
          <Button className="cursor-pointer bg-blue-400">Edit</Button>
          <Button variant='destructive' 
          onClick={() => handleDeleteUser(_id)}
          className="cursor-pointer">Delete User</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
