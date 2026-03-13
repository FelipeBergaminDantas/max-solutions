# ⚠️ IMPORTANTE: Como Rodar o Projeto

## 🚨 Problema Atual

O npm **NÃO FUNCIONA** com diretórios que contêm espaços no nome no Windows.

Seu diretório atual:
```
C:\Users\felip\OneDrive\Documents\personal_projects\max_solutions
```

✅ Diretório sem espaços - Pronto para rodar!

## ✅ Solução Simples

### Opção 1: Mover para C:\projetos (Recomendado)

1. Crie uma pasta sem espaços:
```cmd
mkdir C:\projetos
```

2. Copie TODO o conteúdo desta pasta para lá:
```cmd
xcopy "%cd%" C:\projetos\max-solutions /E /I /H
```

3. Navegue até a nova pasta:
```cmd
cd C:\projetos\max-solutions
```

4. Instale e rode:
```cmd
npm install
npm run dev
```

5. Acesse: http://localhost:3000

### Opção 2: Mover para sua pasta de usuário

1. Crie a pasta:
```cmd
mkdir C:\Users\felip\max-solutions
```

2. Copie os arquivos:
```cmd
xcopy "%cd%" C:\Users\felip\max-solutions /E /I /H
```

3. Navegue e rode:
```cmd
cd C:\Users\felip\max-solutions
npm install
npm run dev
```

### Opção 3: Usar outro drive

```cmd
mkdir D:\max-solutions
xcopy "%cd%" D:\max-solutions /E /I /H
cd D:\max-solutions
npm install
npm run dev
```

## 🎯 Comandos Rápidos (Copiar e Colar)

### Solução Completa em 4 Comandos:

```cmd
mkdir C:\projetos\max-solutions
xcopy "%cd%" C:\projetos\max-solutions /E /I /H /Y
cd C:\projetos\max-solutions
npm install && npm run dev
```

## 📝 O que Fazer Depois

Após mover o projeto e rodar `npm run dev`:

1. ✅ O servidor iniciará em http://localhost:3000
2. ✅ Abra seu navegador e acesse o endereço
3. ✅ Você verá o site da Max Solutions funcionando!

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor (http://localhost:3000)

# Produção
npm run build        # Cria build otimizado
npm start            # Roda build de produção

# Outros
npm run lint         # Verifica erros de código
```

## 🎨 Personalizações Necessárias

Depois que o site estiver rodando, você precisa:

1. **Adicionar fotos da equipe**
   - Coloque em `public/team/max.jpg`
   - Coloque em `public/team/cadu.jpg`

2. **Atualizar contatos**
   - Edite `components/Contact.tsx`
   - Edite `components/Footer.tsx`
   - Substitua números, emails e redes sociais

3. **Adicionar logo**
   - Coloque em `public/logo.svg`
   - Adicione favicons em `public/`

## ❓ Problemas Comuns

### "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org

### "Porta 3000 já está em uso"
```cmd
# Use outra porta
npm run dev -- -p 3001
```

### "Erro ao instalar dependências"
```cmd
# Limpe e reinstale
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install
```

## 📞 Precisa de Ajuda?

Se ainda tiver problemas:

1. Verifique se o Node.js está instalado: `node --version`
2. Verifique se está em um diretório SEM ESPAÇOS
3. Tente limpar o cache: `npm cache clean --force`

## 🚀 Próximos Passos

Depois que o site estiver rodando localmente:

1. ✅ Personalize o conteúdo
2. ✅ Adicione fotos reais
3. ✅ Teste em diferentes dispositivos
4. ✅ Faça deploy (veja DEPLOY.md)

---

**RESUMO:** Mova o projeto para um diretório sem espaços e rode `npm install && npm run dev`
