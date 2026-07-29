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
  buttonLabel = "Contact Us",
  buttonTo = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-keyviq-blue py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
        <p className="mt-4 text-blue-100">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <Button to={buttonTo} variant="light" icon={false}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
