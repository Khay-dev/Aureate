"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendPaymentConfirmationEmail } from "@/lib/emailservice";
import { Spinner } from "@/components/spinner";
import { toast } from "sonner"
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "fullName must be at least 2 characters.",
  }),
  email: z
    .string({ required_error: "Provide a valid email address" })
    .email({ message: "Email address is invalid" }),
  service: z.string({
    required_error: "Please select the service needed",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),

});

export function ContactForm() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      service: "",
      description: "",
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const config = {
      fullName: values.fullName,
      email: values.email,
      service: values.service,
      description: values.description,
    };

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // Send the email
    sendPaymentConfirmationEmail(config);

    // Show confirmation
    toast("Form has been submitted successfully! You will receive a mail shortly.");

    // Clear the form
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" bg-white md:p-5 lg:p-10 p-6 flex flex-col gap-y-5 justify-center h-[470px] "
      >
        <p className="font-bold text-2xl leading-8 text-[#391400] ">
          Get In Touch
        </p>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Full name"  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Email Address*" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="">
              <Select
                value={field.value} // Bind the value to the form's state
                onValueChange={(value) => {
                  field.onChange(value); // Update the form's state
                }}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Our Services</SelectLabel>
                    <SelectItem value="Digital-Marketing">Digital Marketing</SelectItem>
                    <SelectItem value="design-services">Design Services</SelectItem>
                    <SelectItem value="Brand-Management">Brand Management</SelectItem>
                    <SelectItem value="Social-Media-Management">
                      Social Media Management
                    </SelectItem>
                    <SelectItem value="Branding-Brand-Strategy">
                      Branding & Brand Strategy
                    </SelectItem>
                    <SelectItem value="Website-Development-Management">
                      Website development & Management
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Textarea placeholder=" A short brief about your project." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] py-[20px] flex justify-center bg-[#FF6600] hover:bg-[#FF944D] rounded-[6px] disabled:opacity-50"
        >
          {form.formState.isSubmitting ? (
            <Spinner size={20} />
          ) : (
            "SUBMIT"
          )}
        </Button>
      </form>
    </Form>
  );
}

