import Image from "next/image";
import { site } from "@/data/site";

const buttonBase =
  "inline-flex h-10 items-center rounded-md border px-4 text-sm font-medium transition-colors";

export default function Hero() {
  const { links } = site;

  return (
    <section id="topo" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm text-muted">{site.location}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent">{site.role}</p>
          <p className="mt-5 max-w-xl leading-7 text-muted">{site.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className={`${buttonBase} border-accent bg-accent text-background hover:opacity-90`}
            >
              Contato
            </a>
            <a
              href="#projetos"
              className={`${buttonBase} border-border hover:bg-card`}
            >
              Ver projetos
            </a>
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} border-border hover:bg-card`}
              >
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} border-border hover:bg-card`}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-card">
          {site.photo ? (
            <Image
              src={site.photo}
              alt={site.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 320px, 80vw"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/15 via-transparent to-transparent">
              <span className="text-6xl font-semibold tracking-tight text-accent">
                {site.initials}
              </span>
              <span className="text-xs text-muted">{site.role}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
