import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {
  about,
  education,
  experience,
  projects,
  site,
  skills,
} from "@/data/site";

const chip =
  "rounded-md border border-border bg-background px-2 py-1 text-xs text-muted";

export default function Home() {
  const contacts = [
    { label: "GitHub", value: "github.com/rdaaraujo", href: site.links.github },
    {
      label: "LinkedIn",
      value: "Perfil no LinkedIn",
      href: site.links.linkedin,
    },
    {
      label: "E-mail",
      value: site.links.email,
      href: site.links.email ? `mailto:${site.links.email}` : "",
    },
  ].filter((c) => c.href);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <Section id="sobre" title="Sobre">
          <div className="mx-auto max-w-3xl space-y-4 leading-7 text-muted">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section
          id="experiencia"
          title="Experiência"
          subtitle="Trajetória profissional"
        >
          <div className="mx-auto max-w-3xl space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{item.company}</h3>
                  <span className="text-xs text-muted">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projetos"
          title="Projetos"
          subtitle="O que estou construindo"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="flex h-28 items-center justify-between bg-gradient-to-br from-accent/15 via-transparent to-transparent px-5">
                  <span className="font-mono text-2xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className={chip}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm text-accent hover:underline"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="formacao" title="Formação">
          <div className="mx-auto max-w-3xl space-y-4">
            {education.map((item) => (
              <article
                key={item.title}
                className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-card p-5"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                </div>
                <span className="text-xs text-muted">{item.period}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills e tecnologias"
          subtitle="Stack de trabalho e em evolução"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.group}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-sm font-semibold">{group.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contato" title="Contato" subtitle={site.location}>
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="min-w-48 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-accent"
              >
                <p className="text-xs text-muted">{contact.label}</p>
                <p className="mt-1 text-sm font-medium">{contact.value}</p>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
