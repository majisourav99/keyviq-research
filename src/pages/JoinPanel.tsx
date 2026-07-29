import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { IconBadge } from "../components/ui/IconBadge";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/layout/PageHeader";
import { images } from "../data/images";

const perks = [
  { icon: "Sparkles", title: "Get Paid for Your Opinion", body: "Earn rewards for surveys, interviews, and studies you take part in." },
  { icon: "Compass", title: "Flexible Participation", body: "Join studies that fit your schedule — no minimum commitment." },
  { icon: "Target", title: "Shape Real Products", body: "Your feedback feeds directly into decisions brands make next quarter." },
  { icon: "ShieldCheck", title: "Privacy Respected", body: "Your data is anonymized and fraud-checked before it ever reaches a client report." },
];

export function JoinPanel() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Join Panel"
        title="Your Opinion, Powering Better Products"
        breadcrumb="Join Panel"
        image={images.pageHeaderJoinPanel}
      />

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
                <IconBadge icon={perk.icon} size="sm" tone="light" />
                <h3 className="mt-4 font-bold text-gray-900">{perk.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{perk.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-keyviq-mist py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight text-center">
            Sign Up in Two Minutes
          </h2>
          <p className="mt-3 text-center text-gray-500">
            We'll match you to studies that fit your background and interests.
          </p>

          <div className="mt-10 rounded-2xl bg-white p-8 border border-gray-100">
            {submitted ? (
              <div className="flex items-start gap-3">
                <CircleCheck className="size-6 text-keyviq-blue shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">You're on the list</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We'll email you when a study matching your profile opens up.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="panel-name" className="text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    id="panel-name"
                    name="name"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                  />
                </div>
                <div>
                  <label htmlFor="panel-email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="panel-email"
                    name="email"
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
                  />
                </div>
                <div>
                  <label htmlFor="panel-country" className="text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    id="panel-country"
                    name="country"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm outline-none focus-visible:border-keyviq-blue"
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
