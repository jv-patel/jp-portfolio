"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { validateContactForm, ContactFormValues, ContactFormErrors } from "@/utils/validation";
import { cn } from "@/lib/utils";

const initialValues: ContactFormValues = { name: "", email: "", subject: "", message: "" };

type Status = "idle" | "loading" | "success" | "error";

function FloatingField({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
  textarea = false,
}: {
  id: keyof ContactFormValues;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (id: keyof ContactFormValues, value: string) => void;
  textarea?: boolean;
}) {
  const Component = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Component
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "peer w-full resize-none rounded-input border bg-white/5 px-4 pb-2.5 pt-5 text-sm text-text-primary outline-none transition-colors placeholder-transparent",
          error ? "border-red-400/60" : "border-border-glass focus:border-accent-sky/60"
        )}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 text-sm text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent-sky peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(id: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialValues);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="gradient-border glass rounded-card p-card-internal shadow-luxury sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingField id="name" label="Your Name" value={values.name} error={errors.name} onChange={handleChange} />
        <FloatingField id="email" label="Your Email" type="email" value={values.email} error={errors.email} onChange={handleChange} />
      </div>
      <div className="mt-5">
        <FloatingField id="subject" label="Subject" value={values.subject} error={errors.subject} onChange={handleChange} />
      </div>
      <div className="mt-5">
        <FloatingField id="message" label="Your Message" value={values.message} error={errors.message} onChange={handleChange} textarea />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        data-magnetic
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-btn bg-gradient-primary px-6 py-3.5 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" ? (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 size={18} className="animate-spin" /> Sending...
            </motion.span>
          ) : status === "success" ? (
            <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CheckCircle2 size={18} /> Message Sent!
            </motion.span>
          ) : (
            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Send size={16} /> Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {status === "error" && (
        <p className="mt-3 flex items-center gap-1.5 text-sm text-red-400">
          <AlertCircle size={14} /> Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
