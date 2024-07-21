"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formSchema } from "@/lib/formValidation";
import { authentication, signin } from "@/app/lib/action";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function Authentication() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmitCreateAccount(values: z.infer<typeof formSchema>) {
    authentication(values);
  }

  function onSubmitLoginAccount(values: z.infer<typeof formSchema>) {
    signin(values);
  }

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken; // Access Token
      const user = result.user; // User information

      console.log("Google Access Token:", token);
      console.log("User:", user);
      // You can now use the token or user information as needed
    } catch (error) {
      // Handle Errors here.
      // The email of the user's account used.
      // The AuthCredential type that was used.
    }
  };

  return (
    <div className='bg-black/50 backdrop-blur-md p-10 rounded-md max-w-[500px] mx-auto mt-20 shadow-lg'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2 mb-6'>
          <TabsTrigger value='account'>Create Account</TabsTrigger>
          <TabsTrigger value='login'>Login</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitCreateAccount)}
              className='space-y-8'
            >
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Username'
                        {...field}
                        className='focus:outline-none'
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='name@example.com'
                        className='focus:outline-none active:outline-none'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>
                Create Account
              </Button>
              <button
                onClick={() => googleSignIn()}
                className='w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              >
                <FcGoogle className='mr-2' /> {/* Google logo */}
                <span>Create Account With Google</span>
              </button>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value='login'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitLoginAccount)}
              className='space-y-8'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='name@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <button
                onClick={() => googleSignIn()}
                className='w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              >
                <FcGoogle className='mr-2' />
                <span>Create Account With Google</span>
              </button>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
