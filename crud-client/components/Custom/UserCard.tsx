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
import React from "react"

interface iUserCardProps {
  user: iUser
}

const UserCard = ({ user }: iUserCardProps) => {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <CardHeader>
          <CardAction className="pt-3">
            <h2>No Action</h2>
          </CardAction>
          <CardTitle className="pt-3">{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link className="w-full" href={`/users/${user._id}`}>
            <Button className="w-full cursor-pointer">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
