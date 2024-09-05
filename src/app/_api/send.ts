import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../_components/Email/email.components";

const resend = new Resend("re_ZEkMiJNG_9N5mfdzK1njHb6xvq6qKhVXi");

const Send = async (payload: any) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <medcod49@gmail.com>",
    to: ["medeu.amangeldi@nu.edu.kz"],
    subject: "Hello world",
    react: EmailTemplate({ firstName: "John" }),
  });
};

export default Send;
