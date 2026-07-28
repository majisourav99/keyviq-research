import { Button } from "./Button";

type CTASectionProps = {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonTo?: string;
};

export function CTASection({
  title,
  subtitle,
  buttonLabel = "Start Now",
  buttonTo = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-keyviq-navy via-keyviq-indigo-dark to-keyviq-indigo py-20">
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-keyviq-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-keyviq-indigo/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{title}</h2>
        <p className="mt-4 text-white/70">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <Button to={buttonTo} variant="light">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
