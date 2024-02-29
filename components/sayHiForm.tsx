'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/actions/sendEmail";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const schema = z.object({
    name: z.string({
        required_error: "Please enter your name",
        invalid_type_error: "Must be a string"
    }),
    email: z.string({
        required_error: "Please enter your email address",
        invalid_type_error: "Must be a string"
    }).email(),
    message: z.string({
        required_error: "Please enter your message",
        invalid_type_error: "Must be a string"
    }).min(10, {
        message: "Message must be at least 10 characters",
    })
    .max(256, {
        message: "Message must not exceed 256 characters.",
    })
})

export default function SayHiForm(){
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })
    const router = useRouter();
    
    const onSubmit = () => {
        router.push('/');
    }

    return(
        <div className="min-h-96 w-full md:w-3/5">
            <div className="flex flex-col items-center justify-center p-2 lg:p-16">
                <Form {...form}>
                    <form action={async (formData) => { await sendEmail(formData) }} className="space-y-6 text-neutral-200 w-full">
                        <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-6 text-black dark:text-white">
                            <FormField 
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-white dark:border-opacity-15 dark:bg-inherit" required/>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-white dark:border-opacity-15 dark:bg-inherit" required/>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField 
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-black dark:text-white">Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your message here." className="text-black dark:text-white dark:border-white dark:border-opacity-15 dark:bg-inherit" {...field} required/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" onClick={onSubmit}  className="dark:bg-slate-200 dark:text-black">Submit</Button>  
                    </form>
                </Form>
            </div>
        </div>
    )
}