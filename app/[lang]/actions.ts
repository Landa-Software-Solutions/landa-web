"use server";

import { Resend } from "resend";

export type ContactState = { status: "idle" | "success" | "error" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (formData: FormData, name: string, max = 200) =>
  String(formData.get(name) ?? "").trim().slice(0, max);

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: los bots completan este campo oculto; respondemos "ok" sin enviar.
  if (field(formData, "website")) return { status: "success" };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const projectType = field(formData, "projectType");
  const budget = field(formData, "budget");
  const message = field(formData, "message", 5000);

  if (!name || !projectType || !message || !EMAIL_PATTERN.test(email)) {
    return { status: "error" };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form: missing Resend environment variables");
    return { status: "error" };
  }

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Nuevo contacto web: ${name} (${projectType})`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Empresa: ${company || "-"}`,
      `Tipo de proyecto: ${projectType}`,
      `Presupuesto: ${budget || "-"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return { status: "error" };
  }
  return { status: "success" };
}
