# 🚀 Guia de Deploy

## Opção 1: Vercel (Recomendado)

A Vercel é a plataforma criada pelos desenvolvedores do Next.js e oferece a melhor experiência.

### Passos:

1. **Criar conta na Vercel**
   - Acesse: https://vercel.com
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Preparar o repositório**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [seu-repositorio]
   git push -u origin main
   ```

3. **Importar projeto na Vercel**
   - Clique em "New Project"
   - Selecione seu repositório
   - Configure as variáveis de ambiente (se necessário)
   - Clique em "Deploy"

4. **Configurar domínio personalizado**
   - Vá em Settings > Domains
   - Adicione seu domínio (maxsolutions.com.br)
   - Configure os DNS conforme instruções

### Variáveis de Ambiente na Vercel:
```
NEXT_PUBLIC_SITE_URL=https://maxsolutions.com.br
NEXT_PUBLIC_WHATSAPP=5511999999999
NEXT_PUBLIC_EMAIL=contato@maxsolutions.com.br
NEXT_PUBLIC_INSTAGRAM=maxsolutions
```

## Opção 2: Netlify

### Passos:

1. **Criar conta na Netlify**
   - Acesse: https://netlify.com
   - Faça login com GitHub

2. **Deploy via Git**
   - Clique em "Add new site"
   - Selecione "Import an existing project"
   - Conecte seu repositório
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Configurar domínio**
   - Vá em Domain settings
   - Adicione seu domínio personalizado

## Opção 3: Deploy Manual (VPS/Servidor)

### Requisitos:
- Node.js 18+
- PM2 (gerenciador de processos)
- Nginx (servidor web)

### Passos:

1. **Preparar o servidor**
   ```bash
   # Instalar Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Instalar PM2
   sudo npm install -g pm2
   ```

2. **Fazer upload do projeto**
   ```bash
   # No servidor
   cd /var/www
   git clone [seu-repositorio] max-solutions
   cd max-solutions
   npm install
   npm run build
   ```

3. **Configurar PM2**
   ```bash
   pm2 start npm --name "max-solutions" -- start
   pm2 save
   pm2 startup
   ```

4. **Configurar Nginx**
   ```nginx
   server {
       listen 80;
       server_name maxsolutions.com.br www.maxsolutions.com.br;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Configurar SSL com Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d maxsolutions.com.br -d www.maxsolutions.com.br
   ```

## Configuração de DNS

Independente da plataforma escolhida, configure seu DNS:

### Para Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Para Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [seu-site].netlify.app
```

## Checklist Pós-Deploy

- [ ] Site acessível via HTTPS
- [ ] Redirecionamento www → não-www (ou vice-versa)
- [ ] Todas as páginas carregando corretamente
- [ ] Formulários funcionando
- [ ] Links de redes sociais corretos
- [ ] Analytics configurado
- [ ] Sitemap acessível (/sitemap.xml)
- [ ] Robots.txt configurado
- [ ] Favicon aparecendo
- [ ] Open Graph tags funcionando
- [ ] Performance > 90 no Lighthouse

## Monitoramento

### Ferramentas Recomendadas:

1. **Uptime Monitoring**
   - UptimeRobot (gratuito)
   - Pingdom
   - StatusCake

2. **Performance Monitoring**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **Error Tracking**
   - Sentry
   - LogRocket
   - Rollbar

## Backup

Configure backups automáticos:

1. **Código**: Git (já está versionado)
2. **Banco de dados** (quando implementar):
   ```bash
   # Backup diário automático
   0 2 * * * pg_dump maxsolutions > /backups/db_$(date +\%Y\%m\%d).sql
   ```

## Atualizações

### Deploy automático (Vercel/Netlify):
```bash
git add .
git commit -m "Descrição da atualização"
git push
# Deploy automático será acionado
```

### Deploy manual (VPS):
```bash
cd /var/www/max-solutions
git pull
npm install
npm run build
pm2 restart max-solutions
```

## Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro: "Port 3000 already in use"
```bash
pm2 stop max-solutions
pm2 start max-solutions
```

### Site lento
- Verificar Core Web Vitals
- Otimizar imagens
- Habilitar cache
- Usar CDN

## Suporte

Para problemas de deploy:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs/deployment

## Custos Estimados

### Vercel
- Hobby (gratuito): Perfeito para começar
- Pro ($20/mês): Para produção com mais recursos

### Netlify
- Starter (gratuito): Bom para começar
- Pro ($19/mês): Para produção

### VPS (Digital Ocean, Linode, etc)
- $5-10/mês: Servidor básico
- $20-40/mês: Servidor com mais recursos

### Domínio
- .com.br: R$ 40-60/ano
- .com: R$ 50-80/ano

---

**Recomendação:** Comece com Vercel (gratuito) e migre para plano pago conforme necessário.
