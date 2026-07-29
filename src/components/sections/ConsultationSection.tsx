import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CircleCheck, CircleAlert } from "lucide-react";
import { CheckList } from "../ui/CheckList";
import { Button } from "../ui/Button";
import { consultation } from "../../data/content";
import { services } from "../../data/services";
import { images } from "../../data/images";
import { submitNetlifyForm } from "../../lib/netlifyForm";

export function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitNetlifyForm("quote-request", e.currentTarget);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      className="relative bg-cover bg-center py-20 sm:py-24"
      style={{ backgroundImage: `url(${images.heroDashboard})` }}
    >
      <div className="absolute inset-0 bg-keyviq-blue/90" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-white/70">
            {consultation.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {consultation.title}
          </h2>
          <p className="mt-4 text-white/80">{consultation.body}</p>
          <div className="mt-6">
            <CheckList items={consultation.checklist} light />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-white p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex items-start gap-3 py-6">
              <CircleCheck className="size-6 text-keyviq-blue shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Request received</h3>
                <p className="mt-1 text-sm text-gray-500">
                  A senior researcher will follow up within 48 hours to scope your study.
                </p>
              </div>
            </div>
          ) : (
            <form
              name="quote-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="quote-request" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consult-name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    id="consult-name"
                    name="name"
                    required
                    type="text"
                    placeholder="John Smith"
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                  />
                </div>
                <div>
                  <label htmlFor="consult-email" className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    id="consult-email"
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="consult-phone" className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="mt-1.5 w-full rounded-md border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                />
              </div>
              <div>
                <label htmlFor="consult-service" className="text-sm font-medium text-gray-700">
                  Select Service
                </label>
                <select
                  id="consult-service"
                  name="service"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-md border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                >
                  <option value="" disabled>
                    Choose a service...
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="consult-message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="consult-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="mt-1.5 w-full rounded-md border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                />
              </div>
              {error && (
                <div className="flex items-start gap-2 text-sm text-red-600">
                  <CircleAlert className="size-4 mt-0.5 shrink-0" />
                  Something went wrong sending your request. Please try again.
                </div>
              )}
              <div className="flex flex-wrap gap-3 pt-1">
                <Button type="submit" icon={false} disabled={submitting}>
                  {submitting ? "Sending..." : "Contact Us"}
                </Button>
                <Button to="/services" variant="outline" icon={false}>
                  Read More
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
