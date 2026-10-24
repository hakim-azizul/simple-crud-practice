"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

const AddNewUserPage = () => {
  const handleAddNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())

    console.log("after submit", newUser)

    const res = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    console.log('response from server',res)
    const afterSubmit = await res.json();
    if (afterSubmit.insertedId){
        alert(`${newUser.name} adedd succesfully`)
        redirect('/users')
    }
  }

  return (
    <div className="container mx-auto p-20">
      <form onSubmit={handleAddNewUser}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">Add User</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default AddNewUserPage
