"use client";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterModal = () => {
  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggle = () => {
    loginModal.onClose();
    registerModal.onOpen();
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.ok) {
        console.log("Ok");
        toast.success("Logged IN");
        router.refresh();
        loginModal.onClose();
      }
      if (callback?.error) {
        toast.error("Login failed");
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle="Login to your account" />
      <Input
        id="email"
        label="Email"
        errors={errors}
        register={register}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        errors={errors}
        register={register}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <Button
        icon={FcGoogle}
        outline
        label="Continue with Google"
        onClick={() => {
          signIn("google");
          toast.success("Logged IN");
        }}
      />
      <Button
        icon={AiFillGithub}
        outline
        label="Continue with Github"
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 mt-4  font-light">
        <div className="flex justify-center gap-2">
          <div>First time using Airbnb ?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title="Login"
      actionLabel="Continue"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      body={bodyContent}
      onSubmit={handleSubmit(onSubmit)}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
