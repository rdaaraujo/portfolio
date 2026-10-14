import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
