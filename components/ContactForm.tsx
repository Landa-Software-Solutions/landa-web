"use client";

import { useActionState, type ReactNode } from "react";
import { sendContact, type ContactState } from "@/app/[lang]/actions";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type FormDict = Dictionary["contact"]["form"];

const inputClass =
  "w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactForm({ dict, email }: { dict: FormDict; email: string }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendContact,
    { status: "idle" }
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full items-center rounded-xl border border-brand/30 bg-white p-8 text-base font-medium text-ink"
      >
        {dict.success}
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <Field label={dict.name} required>
        <input name="name" required autoComplete="name" className={inputClass} />
      </Field>
      <Field label={dict.email} required>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </Field>
      <Field label={dict.company}>
        <input name="company" autoComplete="organization" className={inputClass} />
      </Field>
      <Field label={dict.projectType} required>
        <select name="projectType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            {dict.projectTypePlaceholder}
          </option>
          {dict.projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label={dict.budget} className="sm:col-span-2">
        <input
          name="budget"
          placeholder={dict.budgetPlaceholder}
          className={inputClass}
        />
      </Field>
      <Field label={dict.message} required className="sm:col-span-2">
        <textarea
          name="message"
          required
          rows={5}
          placeholder={dict.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </Field>

      {/* Honeypot anti-spam: invisible para personas. */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-600 sm:col-span-2">
          {dict.error.replace("{email}", email)}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
        >
          {pending ? dict.sending : dict.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-medium text-muted">
        {label}
        {required && " *"}
      </span>
      {children}
    </label>
  );
}
