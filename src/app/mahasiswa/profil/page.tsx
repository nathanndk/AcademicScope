"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const loginSchema = yup
  .object()
  .shape({
    semester: yup.string().required(),
    sks: yup.string().required(),
  })
  .required();

export function ProfileForm() {
  const form = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (value : any) => {
    try {
      // Di sini Anda dapat melakukan pengiriman data ke server atau melakukan tindakan lain sesuai kebutuhan aplikasi Anda.
      // Contoh pengiriman data menggunakan fetch API:
      const response = await fetch('/api/submit-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      if (response.ok) {
        // Handle sukses, misalnya menavigasi ke halaman lain atau menampilkan pesan sukses.
        alert('Profil berhasil disubmit!');
      } else {
        // Handle kesalahan, misalnya menampilkan pesan kesalahan.
        alert('Gagal menambahkan profil. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Handle kesalahan lain jika ada.
    }
  };

  return (
    <>
    <div className="flex flex-col items-center bg-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="semester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pilih Semester</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan semester" {...field} />
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
                <FormLabel>Jumlah SKS</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan SKS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="scan">Upload Scan</Label>
            <Input id="scan" type="file" />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      </div>
    </>
  );
}

export default ProfileForm;