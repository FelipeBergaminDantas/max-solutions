# 🚀 Instruções de Instalação

## ⚠️ IMPORTANTE: Problema com Espaços no Caminho

O npm tem problemas com diretórios que contêm espaços no nome. 

## ✅ Solução

### Opção 1: Mover o projeto para um diretório sem espaços

```bash
# Exemplo no Windows:
# Diretório atual: C:\Users\felip\OneDrive\Documents\personal_projects\max_solutions
# Já está sem espaços - pronto para usar!

# Ou para:
# C:\Users\felip\max-solutions
```

### Opção 2: Criar em novo diretório

1. Abra o terminal em um diretório SEM ESPAÇOS no nome
2. Copie todos os arquivos deste projeto para lá
3. Execute:

```bash
npm install
```

## 📦 Após a instalação bem-sucedida

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

## 🌐 Acesso

Após executar `npm run dev`, acesse:
- http://localhost:3000

## 🔧 Próximos Passos

1. Adicionar fotos reais de Max Augusto e Cadu em `public/team/`
2. Atualizar informações de contato reais (WhatsApp, Email, Instagram)
3. Adicionar Google Analytics
4. Configurar domínio personalizado
5. Deploy na Vercel ou outro serviço

## 📱 Informações para Atualizar

No arquivo `components/Contact.tsx` e `components/Footer.tsx`:
- WhatsApp: Substituir `5511999999999` pelo número real
- Email: Substituir `contato@maxsolutions.com.br` pelo email real
- Instagram: Substituir `@maxsolutions` pelo handle real

## 🎨 Personalização

Cores podem ser ajustadas em:
- `tailwind.config.ts`
- `app/globals.css`

## 📄 Estrutura Criada

✅ Next.js 14 com App Router
✅ TypeScript configurado
✅ Tailwind CSS com cores personalizadas
✅ Componentes modulares e reutilizáveis
✅ SEO otimizado
✅ Responsivo (mobile-first)
✅ Performance otimizada
✅ Arquitetura escalável

## 🚀 Deploy Recomendado

### Vercel (Recomendado)

1. Crie conta em https://vercel.com
2. Conecte seu repositório Git
3. Deploy automático

### Outras opções:
- Netlify
- AWS Amplify
- Digital Ocean

## 📞 Suporte

Se precisar de ajuda, entre em contato com o desenvolvedor.
