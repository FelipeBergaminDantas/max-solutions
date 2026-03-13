# Instruções para Adicionar Imagens

## 📸 Imagens Necessárias

### 1. Logo da Empresa
- **Local:** `public/logo.png`
- **Onde aparece:** Seção "Sobre a Empresa"
- **Recomendação:** PNG com fundo transparente, 512x512px ou maior

### 2. Foto de Max Augusto
- **Local:** `public/team/max.jpg`
- **Onde aparece:** Seção "Sobre Nós"
- **Recomendação:** Foto profissional, formato quadrado, mínimo 800x800px

### 3. Foto de Carlos Eduardo
- **Local:** `public/team/carlos.jpg`
- **Onde aparece:** Seção "Sobre Nós"
- **Recomendação:** Foto profissional, formato quadrado, mínimo 800x800px

## 📁 Como Adicionar

1. Crie a pasta `public/team/` se não existir
2. Adicione as imagens nos locais indicados
3. As imagens serão carregadas automaticamente

## 🎥 Vídeo de Depoimento

Para adicionar o vídeo do cliente na seção "Clientes":

1. Faça upload do vídeo no YouTube ou Vimeo
2. Copie o código de incorporação (embed)
3. Edite o arquivo `components/Clients.tsx`
4. Descomente o código do iframe e adicione a URL

Exemplo para YouTube:
```jsx
<iframe
  src="https://www.youtube.com/embed/SEU_VIDEO_ID"
  title="Depoimento Cliente"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="absolute inset-0 w-full h-full"
/>
```

## 🔗 Links dos Certificados

Para adicionar os links dos certificados:

1. Edite `components/Footer.tsx`
2. Substitua os `href="#"` pelos links reais dos certificados
3. Edite também `components/Hero.tsx` para os badges no topo

Exemplo:
```jsx
<a 
  href="https://link-do-certificado-mercado-livre.com"
  target="_blank" 
  rel="noopener noreferrer"
>
  ✓ Mercado Livre
</a>
```

## ✅ Checklist

- [ ] Logo da empresa adicionado em `public/logo.png`
- [ ] Foto de Max em `public/team/max.jpg`
- [ ] Foto de Carlos Eduardo em `public/team/carlos.jpg`
- [ ] Vídeo de depoimento configurado
- [ ] Links dos certificados atualizados no Footer
- [ ] Links dos certificados atualizados no Hero
