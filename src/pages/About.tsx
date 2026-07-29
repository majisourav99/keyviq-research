import { StatCounter } from "../components/ui/StatCounter";
import { Button } from "../components/ui/Button";
import { CoreValues } from "../components/sections/CoreValues";
import { CTASection } from "../components/ui/CTASection";
import { PageHeader } from "../components/layout/PageHeader";
import { stats } from "../data/content";
import { images } from "../data/images";

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About KEYVIQ"
        breadcrumb="About"
        image={images.pageHeaderAbout}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={images.serviceAiLlm}
            alt="KEYVIQ research operations"
            className="rounded-2xl w-full aspect-4/3 object-cover"
          />
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-keyviq-blue">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-500">
              KEYVIQ is a premium Hybrid (Human + AI) Market Research Agency registered
              in the US, operating globally. We deliver both digital and on-site market
              research for Tech, B2B, B2C, and Healthcare companies.
            </p>
            <p className="mt-4 text-gray-500">
              We occupy the high-margin sweet spot:{" "}
              <strong className="text-gray-900">
                verified human data, supervised by human experts, accelerated by AI tools.
              </strong>{" "}
              Traditional agencies are slow and error-prone. Pure AI startups lack
              real-world validation. KEYVIQ combines the best of both — with an
              anti-fraud security stack that competitors simply cannot replicate.
            </p>
            <div className="mt-8">
              <Button to="/contact" icon={false}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-keyviq-navy py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <CoreValues />

      <CTASection
        title="Want to Work With Us?"
        subtitle="Tell us about your business and we'll show you what verified, AI-accelerated research looks like for your category."
        buttonLabel="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
