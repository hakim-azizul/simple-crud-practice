import React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { iUser } from "@/types/UserType"

interface iUpdateUserDialogProps{
    user: iUser
}

const UpdateUserDialog = ({user}:iUpdateUserDialogProps) => {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger
            render={<Button variant="outline">Update</Button>}
          />
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
              <DialogDescription>
                Make changes to your user profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue={user.name} />
              </Field>
              <Field>
                <Label htmlFor="email-1">Email</Label>
                <Input
                  id="email-1"
                  name="email"
                  type="email"
                  defaultValue={user.email}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}

export default UpdateUserDialog
