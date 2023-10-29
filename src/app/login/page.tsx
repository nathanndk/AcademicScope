"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function LoginPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="flex h-screen w-full justify-center items-center">
        <Card className="max-w-sm w-full mx-auto h-max">
          <CardHeader>
            <div className="flex justify-center items-center aligin-center">
              <img
                alt="Company Logo"
                height="30"
                src="/logo.png"
                style={{
                  aspectRatio: "30/30",
                  objectFit: "cover",
                }}
                width="30"
              />
            </div>
            <CardTitle>AcademicScope</CardTitle>
            <CardDescription>Selamat datang</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan username anda"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan password anda"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <Card className="shadow-lg w-[550px]">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full mt-4" collapsible="" type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:underline-none">
                  Why does turning my device off and on again solve all issues?
                </AccordionTrigger>
                <AccordionContent>
                  Because it clears the memory and starts the system from
                  scratch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:underline-none">
                  Are extra cables in the box bonus decorations?
                </AccordionTrigger>
                <AccordionContent>
                  As tempting as it is to weave them into artistic sculptures,
                  those cables are essential for connecting, charging, and
                  beaming digital magic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:underline-none">
                  Can I wear my VR headset to my cousin's wedding?
                </AccordionTrigger>
                <AccordionContent>
                  Yes but you might end up inadvertently dodging invisible dance
                  partners or trying to high-five digital confetti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:underline-none">
                  How often should I update my software?
                </AccordionTrigger>
                <AccordionContent>
                  It's recommended to keep your software up to date to ensure
                  you have the latest security patches and features.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-b-0" value="item-5">
                <AccordionTrigger className="hover:underline-none">
                  Why does my device get hot when I'm using it?
                </AccordionTrigger>
                <AccordionContent>
                  Devices can generate heat during operation, especially when
                  running intensive tasks. This is normal, but if it gets too
                  hot, it may indicate a problem.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
