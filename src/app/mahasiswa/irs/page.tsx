import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ...

export function ProfileForm() {
  const form = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/submit-mahasiswa-data", {
        method: "POST",
        body: JSON.stringify({
          semester: data.semester,
          sks: data.sks,
          image: data.scan[0],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Card className="w-full max-w-xs shadow-lg rounded-md">
        <CardHeader className="bg-primary text-white py-3">
          <CardTitle className="text-xl font-semibold">Form Input Mahasiswa</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {error && (
            <div>
              <Alert variant="destructive">
                <AlertTitle>Submit Gagal!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          }

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="semester">Semester</FormLabel>
                    <FormControl>
                      <Input
                        id="semester"
                        type="text"
                        placeholder="Masukkan semester"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="sks">Jumlah SKS</FormLabel>
                    <FormControl>
                      <Input
                        id="sks"
                        type="text"
                        placeholder="Masukkan SKS"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-1">
                <label htmlFor="scan" className="text-sm text-gray-700 font-medium">
                  Upload Scan
                </label>
                <Input id="scan" type="file" className="w-full" />
              </div>

              <Button type="submit" className="w-full" disabled={!form.formState.isValid}>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
