import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CircleCheck } from "lucide-react";
import { contactInfo } from "../data/content";
import { Button } from "../components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-keyviq-navy via-keyviq-indigo-dark to-keyviq-indigo py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-white tracking-tight"
          >
            Let's Talk Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-white/70"
          >
            Tell us about your business and we'll get back to you within one
            business day.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-keyviq-indigo/20 bg-keyviq-mist p-8 flex items-start gap-3">
                <CircleCheck className="size-6 text-keyviq-indigo shrink-0" />
                <div>
                  <h3 className="font-semibold text-keyviq-navy">Message sent</h3>
                  <p className="mt-1 text-sm text-keyviq-slate">
                    Thanks for reaching out — a member of our team will
                    respond within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-keyviq-navy">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-keyviq-navy">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-keyviq-navy">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-keyviq-navy">
                    What are you looking to learn?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                  />
                </div>
                <Button type="submit" icon={false}>
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-keyviq-mist p-8 h-fit space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="size-5 text-keyviq-indigo shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-keyviq-navy">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-keyviq-slate hover:text-keyviq-indigo break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-keyviq-indigo shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-keyviq-navy">Phone</h4>
                <span className="text-sm text-keyviq-slate">{contactInfo.phone}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-keyviq-indigo shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-keyviq-navy">Office</h4>
                <span className="text-sm text-keyviq-slate">{contactInfo.office}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
