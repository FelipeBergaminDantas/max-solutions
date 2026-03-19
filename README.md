# Max Solutions & Performance

Site institucional da **Max Solutions & Performance** — consultoria especializada em performance e crescimento no Mercado Livre.

---

## O que é

Landing page institucional com foco em conversão, apresentando os serviços, diferenciais, liderança e casos de sucesso da consultoria.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 14 | Framework React com App Router |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 3 | Estilização utilitária |
| Lucide React | — | Ícones |
| next/font | — | Fonte Inter (Google Fonts) |

---

## Arquitetura

```
max_solutions/
├── app/
│   ├── layout.tsx        # Layout raiz (metadata, fonte, viewport)
│   ├── page.tsx          # Página principal (composição das seções)
│   └── globals.css       # Estilos globais e variáveis CSS
├── components/
│   ├── Header.tsx        # Navbar fixa com glassmorphism e scroll detection
│   ├── Hero.tsx          # Seção inicial com animação de contagem nos cards
│   ├── Company.tsx       # Proposta de valor com logo
│   ├── Differentials.tsx # 5 pilares da operação
│   ├── About.tsx         # Liderança com carrossel de fotos
│   ├── Clients.tsx       # Caso de sucesso (Tudo Pratas) com slides
│   ├── Contact.tsx       # Formulário de contato e CTAs
│   └── Footer.tsx        # Rodapé com links, contato e certificações
├── public/
│   ├── logo.png          # Logo da empresa
│   ├── result_tudo_prata.png  # Print dos resultados do cliente
│   └── team/
│       ├── max.jpeg      # Foto Max Augusto
│       └── carlos.jpg    # Foto Carlos Eduardo
└── tailwind.config.ts    # Cores customizadas do design system
```

---

## Design System

Cores definidas em `tailwind.config.ts`:

```ts
primary.dark  = '#0B1C2D'  // Azul escuro (fundo principal)
primary.blue  = '#1E90FF'  // Azul médio (destaques)
primary.green = '#00C48C'  // Verde (CTAs e destaques)
neutral.light = '#F5F7FA'  // Cinza claro (fundos alternados)
```

---

## Como rodar

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Build de produção
npm start         # Servidor de produção
```

---

## Contato

- WhatsApp: +55 11 94762-8089
- Email: contato@maxsolutions.com.br

 ## Desenvolvedor:
 Felipe Bergamin Dantas