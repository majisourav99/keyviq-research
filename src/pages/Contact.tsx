import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CircleCheck, CircleAlert } from "lucide-react";
import { contactInfo } from "../data/content";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/layout/PageHeader";
import { images } from "../data/images";
import { submitNetlifyForm } from "../lib/netlifyForm";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitNetlifyForm("contact", e.currentTarget);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Talk Research"
        breadcrumb="Contact"
        image={images.pageHeaderContact}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-keyviq-blue/20 bg-keyviq-mist p-8 flex items-start gap-3">
                <CircleCheck className="size-6 text-keyviq-blue shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Message sent</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Thanks for reaching out — a member of our team will
                    respond within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    What are you looking to learn?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                  />
                </div>
                {error && (
                  <div className="flex items-start gap-2 text-sm text-red-600">
                    <CircleAlert className="size-4 mt-0.5 shrink-0" />
                    Something went wrong sending your message. Please try again or email us directly at{" "}
                    <a href={`mailto:${contactInfo.email}`} className="underline">
                      {contactInfo.email}
                    </a>
                    .
                  </div>
                )}
                <Button type="submit" icon={false} disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-keyviq-mist p-8 h-fit space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="size-5 text-keyviq-blue shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-500 hover:text-keyviq-blue break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-keyviq-blue shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">Phone</h4>
                <span className="text-sm text-gray-500">{contactInfo.phone}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-keyviq-blue shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">Office</h4>
                <span className="text-sm text-gray-500">{contactInfo.office}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
