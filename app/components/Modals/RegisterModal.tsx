"use client";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import { sign } from "crypto";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then(() => {
        
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("error");
      });
  };

  const toggle = () => {
    registerModal.onClose();
    loginModal.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        errors={errors}
        register={register}
        required
      />
      <Input
        id="name"
        label="Name"
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
        onClick={() => signIn("google")}
      />
      <Button
        icon={AiFillGithub}
        outline
        label="Continue with Github"
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 mt-4  font-light">
        <div className="flex justify-center gap-2">
          <div>Already have an account ?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title="Register"
      actionLabel="Continue"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      body={bodyContent}
      onSubmit={handleSubmit(onSubmit)}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
