import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          {site.name} · {site.role}
        </p>
        <p>© {site.name}</p>
      </div>
    </footer>
  );
}
