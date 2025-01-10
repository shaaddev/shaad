"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/sendEmail";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schema = z.object({
  name: z.string({
    required_error: "Please enter your name",
    invalid_type_error: "Must be a string",
  }),
  email: z
    .string({
      required_error: "Please enter your email address",
      invalid_type_error: "Must be a string",
    })
    .email(),
  message: z
    .string({
      required_error: "Please enter your message",
      invalid_type_error: "Must be a string",
    })
    .min(2, {
      message: "Message must be at least 10 characters",
    })
    .max(256, {
      message: "Message must not exceed 256 characters.",
    }),
});

export default function SayHiForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setIsPending(true);
    const formData = new FormData();

    for (const [key, value] of Object.entries(values)) {
      if (value !== undefined && value !== null && value !== "") {
        formData.append(key, value);
      }
    }

    try {
      const result = await sendEmail(formData);

      toast.success("Message sent succesfully!", {
        description: "Thank you",
      });
      router.push("/");
    } catch (error) {
      toast.error("An unexpected error occured");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-84 w-full">
      <div className="flex flex-col items-center justify-center p-2 lg:p-16">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-neutral-200 w-full"
          >
            <div className="flex flex-col justify-center lg:grid lg:grid-cols-1 lg:gap-6 text-black dark:text-white">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <Input
                      {...field}
                      className="border border-black border-opacity-10 dark:border-white dark:border-opacity-15 dark:bg-inherit"
                      required
                    />
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
                    <Input
                      {...field}
                      className="border border-black border-opacity-10 dark:border-white dark:border-opacity-15 dark:bg-inherit"
                      required
                    />
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
                  <FormLabel className="text-black dark:text-white">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      className="text-black dark:text-white dark:border-white dark:border-opacity-15 dark:bg-inherit"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="dark:bg-slate-200 dark:text-black"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Send"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
