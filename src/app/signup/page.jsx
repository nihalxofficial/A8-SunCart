"use client";

import GoogleSignUp from "@/components/GoogleSignUp";
import { authClient } from "@/lib/auth-client";
import { User, Mail, Eye} from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/assets/SignUp.json";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { EyeSlash } from "@gravity-ui/icons";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    });


    if (data) {
      toast.success("SignUp Successful");
      router.push("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  
  

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-amber-50/20 to-sky-50/30 flex items-center justify-center py-6 px-4">

      <div className="absolute top-0 left-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        <div className="hidden md:block md:w-[50%] relative bg-linear-to-br from-stone-800 to-stone-900">
          <Lottie
          animationData={animationData} 
            loop
            autoplay
            className="object-cover bg-linear-to-r bg-sky-600 via-sky-500 to-sky-400 h-full"
          ></Lottie>
        </div>

        <div className="w-full md:w-[50%] p-5 md:p-6">
          <div className="text-center mb-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-sky-500 to-cyan-400 shadow-md mb-2">
              <User size={18} className="text-white" />
            </div>
            <h1 className="text-lg font-bold">
              <span className="text-sky-600">Create</span>
              <span className="text-amber-600"> Account</span>
            </h1>
            <p className="text-stone-500 text-xs">Sign up to get started</p>
          </div>

          <Form className="flex flex-col gap-2.5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label className="text-stone-700 text-xs font-medium">Full Name</Label>
              <Input
                placeholder="Enter your name"
                startContent={<User size={12} className="text-stone-400" />}
                className="border-stone-200 focus:border-sky-400 h-8 text-xs"
                size="sm"
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="image" type="url">
              <Label className="text-stone-700 text-xs font-medium">Image URL</Label>
              <Input
                placeholder="https://example.com/image.jpg"
                className="border-stone-200 focus:border-sky-400 h-8 text-xs"
                size="sm"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-stone-700 text-xs font-medium">Email Address</Label>
              <Input
                placeholder="john@gmail.com"
                startContent={<Mail size={12} className="text-stone-400" />}
                className="border-stone-200 focus:border-sky-400 h-8 text-xs"
                size="sm"
              />
              <FieldError />
            </TextField>

            <TextField className="w-full" name="password">
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  className="w-full"
                  placeholder="Enter password"
                  type={isVisible ? "text" : "password"}
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description className="text-stone-400 text-[9px] mt-0.5">
                8+ chars, 1 uppercase & 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 pt-1">
              <Button
                type="submit"
                className="flex-1 bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold py-1.5 rounded-lg transition shadow-md text-xs"
                size="sm"
              >
                Sign Up
              </Button>
              <Button
                type="reset"
                variant="secondary"
                className="flex-1 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold py-1.5 rounded-lg transition text-xs"
                size="sm"
              >
                Reset
              </Button>
            </div>

            <div className="relative my-1.5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200"></div>
              </div>
              <div className="relative flex justify-center text-[10px]">
                <span className="px-2 bg-white text-stone-400">Or continue with</span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <GoogleSignUp />
            </div>

            <div className=" text-center text-[10px] text-stone-600 mt-1">
              Already have an account?{" "}
              <Link href="/signin" className="text-sky-600 hover:text-amber-600 font-semibold">
                Login here
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}