import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { IconBadge } from "../components/ui/IconBadge";
import { Button } from "../components/ui/Button";

const perks = [
  { icon: "Sparkles", title: "Get Paid for Your Opinion", body: "Earn rewards for surveys, interviews, and studies you take part in." },
  { icon: "Compass", title: "Flexible Participation", body: "Join studies that fit your schedule — no minimum commitment." },
  { icon: "Target", title: "Shape Real Products", body: "Your feedback feeds directly into decisions brands make next quarter." },
  { icon: "ShieldCheck", title: "Privacy Respected", body: "Your data is anonymized before it ever reaches our AI analytics engine." },
];

export function JoinPanel() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-keyviq-navy via-keyviq-indigo-dark to-keyviq-indigo py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 font-data"
          >
            Join Panel
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight"
          >
            Your Opinion, Powering Better Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            Join the Keyviq research panel and get paid to share your
            perspective on the brands and products you already use.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-keyviq-mist p-6"
              >
                <IconBadge icon={perk.icon} size="sm" />
                <h3 className="mt-4 font-semibold text-keyviq-navy">{perk.title}</h3>
                <p className="mt-2 text-sm text-keyviq-slate">{perk.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-keyviq-mist py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-keyviq-navy tracking-tight text-center">
            Sign Up in Two Minutes
          </h2>
          <p className="mt-3 text-center text-keyviq-slate">
            We'll match you to studies that fit your background and interests.
          </p>

          <div className="mt-10 rounded-2xl bg-white p-8 border border-keyviq-navy/5">
            {submitted ? (
              <div className="flex items-start gap-3">
                <CircleCheck className="size-6 text-keyviq-indigo shrink-0" />
                <div>
                  <h3 className="font-semibold text-keyviq-navy">You're on the list</h3>
                  <p className="mt-1 text-sm text-keyviq-slate">
                    We'll email you when a study matching your profile opens up.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="panel-name" className="text-sm font-medium text-keyviq-navy">
                    Full name
                  </label>
                  <input
                    id="panel-name"
                    name="name"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                  />
                </div>
                <div>
                  <label htmlFor="panel-email" className="text-sm font-medium text-keyviq-navy">
                    Email
                  </label>
                  <input
                    id="panel-email"
                    name="email"
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                  />
                </div>
                <div>
                  <label htmlFor="panel-country" className="text-sm font-medium text-keyviq-navy">
                    Country
                  </label>
                  <input
                    id="panel-country"
                    name="country"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-keyviq-navy/10 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-indigo"
                  />
                </div>
                <Button type="submit" icon={false} className="w-full justify-center">
                  Join the Panel
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
