"use server"
import { contactSchemaT } from "@/types/ZodTypes";
import { createTransport } from "nodemailer"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {

    const data: contactSchemaT = await request.json()
    const { email, title, message } = data

    const tranporter = createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.API
      }
    })

    const mailOption = {
      from: email,
      to: process.env.EMAIL,
      subject: "Email from nitin v2 2024",
      html: `<li>Title = ${title}</li>
        <li>Email = ${email}</li>
        <h3>Subject = ${message}</h3>`
    }
    const mail = await tranporter.sendMail(mailOption)
    if (mail.accepted) {
      return NextResponse.json("ok")
    }
  }
  catch (e) {
    return NextResponse.json("Internal Server Error")
  }
}