"use server";

import React from "react";
import { Resend } from "resend";
import PortfolioEmail from "@/emails/portfolio-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const { email, message, name } = Object.fromEntries(formData);

  if (!message || typeof message !== "string") {
    return {
      success: false,
      message: "Missing required fields",
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Website <shaad@shaaddev.com>",
      to: [process.env.EMAIL as string],
      subject: "New Message",
      replyTo: email as string,
      react: React.createElement(PortfolioEmail, {
        message: message as string,
        email: email as string,
        name: name as string,
      }),
    });

    return {
      sucess: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
