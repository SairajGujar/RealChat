import React, { useState } from 'react'
import Image from 'next/image'
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form' 
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
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'

type FormData = {
    name:string,
}

const Profile = ({ source, name }: { source: string, name:string }) => {
    const {handleSubmit, register} = useForm<FormData>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [disable, setDisable] = useState<boolean>(false)

    const onSubmit = async(data:FormData) => {
        try {
            setIsLoading(true)
            setDisable(true)
            const response = await axios.put('/api/settings', {
                name:data.name
            });
            console.log(response)
            toast.success("Updated Successfully")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
        finally{
            setIsLoading(false)
            setDisable(false)
        }
    }

    return (
            <Dialog >
                <DialogTrigger asChild>
                    <Image className='rounded-full' src={source} width={40} height={40} alt='?'></Image>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input required minLength={3} {...register('name')} id="name"  className="col-span-3" />
                        </div>

                    <DialogFooter>
                        <Button type="submit" disabled={disable}>
                        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                            Save changes
                        </Button>
                    </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
    )
}

export default Profile