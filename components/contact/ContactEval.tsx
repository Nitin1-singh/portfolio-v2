"use client"
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { contactSchemaT, contactSchemaZ } from "@/types/ZodTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export function ContactEval() {
  const [submit, setSubmit] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<contactSchemaT>({
    resolver: zodResolver(contactSchemaZ)
  })

  const OnSubmit = (data: contactSchemaT) => {
    try {
      setSubmit(true)
      setTimeout(() => {
        fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        setSubmit(false)
        reset()
      }, 5000)
    }
    catch (e) {
      console.log(e)
      setSubmit(false)
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="max-lg:w-3/4 lg:w-1/2 flex flex-col gap-5 mt-10">

      <Input isDisabled={submit} type="email" {...register("email")} isInvalid={errors.email?.message ? true : false} errorMessage={errors.email?.message} radius="sm" variant="bordered" label="Email" placeholder="Enter your Email" />

      <Input isDisabled={submit} type="text" {...register("title")} isInvalid={errors.title ? true : false} errorMessage={errors.title?.message} radius="sm" variant="bordered" label="Title" placeholder="Enter your Title" />

      <Textarea isDisabled={submit} type="text" {...register("message")} isInvalid={errors.message?.message ? true : false} errorMessage={errors.message?.message} minRows={5} radius="sm" height={400} label="Description" variant="bordered" placeholder="Enter your Message" />

      <div className="flex flex-row items-center mt-5 place-content-end">
        <div className="place-content-end">
          <Button isLoading={submit} type="submit" radius="sm" color="secondary" className="w-[200px] h-[50px] max-lg:w-[130px] text-white text-lg font-semibold">SUBMIT</Button>
        </div>
      </div>
    </form>
  )
}