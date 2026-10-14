// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar textos, links e projetos.

export const site = {
  name: "Rafael Araujo",
  initials: "RA",
  role: "Desenvolvedor Back-End",
  location: "Marília, SP",
  url: "https://rdaaraujo.com",
  tagline:
    "Mais de 3 anos de experiência no setor financeiro, mantendo sistemas legados e construindo integrações modernas.",
  // Caminho de uma foto dentro de /public (ex.: "/foto.jpg"). Vazio = mostra as iniciais.
  photo: "",
  links: {
    github: "https://github.com/rdaaraujo",
    linkedin: "", // preencher: https://www.linkedin.com/in/seu-perfil
    email: "", // preencher: contato@rdaaraujo.com
  },
};

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];

export const about = [
  "Sou desenvolvedor back-end na Paschoalotto, empresa de recuperação de crédito e serviços financeiros em Marília, SP. Tenho mais de 3 anos de experiência e trabalho com a manutenção de sistemas legados e a construção de integrações modernas.",
  "Meu stack principal é C#, VB6, Python, R e PostgreSQL (PL/pgSQL), com APIs REST e Git no dia a dia. Estou cursando Análise e Desenvolvimento de Sistemas na UNIMAR e evoluindo para Full-Stack com .NET e React, com foco no ecossistema Microsoft/Azure.",
];

export const experience = [
  {
    role: "Desenvolvedor Back-End",
    company: "Paschoalotto",
    period: "Atual",
    bullets: [
      "Manutenção e evolução de sistemas legados em VB6.",
      "Desenvolvimento de integrações e APIs REST em C#.",
      "Modelagem de dados e rotinas em PostgreSQL (PL/pgSQL).",
    ],
  },
];

export const projects = [
  {
    title: "API de gestão de cobrança",
    description: "API REST em .NET para gestão de cobranças, com PostgreSQL.",
    tags: ["C#", ".NET", "PostgreSQL", "REST"],
    status: "Em breve",
    href: "",
  },
  {
    title: "Scripts PostgreSQL documentados",
    description:
      "Repositório de scripts PL/pgSQL documentados: rotinas, funções e boas práticas.",
    tags: ["PostgreSQL", "PL/pgSQL"],
    status: "Em breve",
    href: "",
  },
  {
    title: "Utilitário de linha de comando",
    description: "CLI em C# e Python para automação de tarefas do dia a dia.",
    tags: ["C#", "Python", "CLI"],
    status: "Em breve",
    href: "",
  },
  {
    title: "Dashboard analítico",
    description: "Painel de análise de dados com Python e R.",
    tags: ["Python", "R"],
    status: "Em breve",
    href: "",
  },
  {
    title: "Migração VB6 para C#",
    description:
      "Demonstração da migração de um sistema legado VB6 para C#, com as decisões documentadas.",
    tags: ["VB6", "C#", "Migração"],
    status: "Em breve",
    href: "",
  },
];

export const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas (ADS)",
    institution: "UNIMAR",
    period: "Cursando",
  },
];

export const skills = [
  { group: "Back-end", items: ["C#", ".NET", "VB6", "APIs REST"] },
  { group: "Banco de dados", items: ["PostgreSQL", "PL/pgSQL"] },
  { group: "Dados e automação", items: ["Python", "R"] },
  { group: "Ferramentas", items: ["Git", "GitHub"] },
  { group: "Aprendendo", items: ["React", "Next.js", "TypeScript", "Azure"] },
];
