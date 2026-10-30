# 🚀 Portfólio Angular/HTML/CSS/JS - Diogo Bassalobre

Um portfólio moderno e responsivo desenvolvido com Angular 17+, HTML5, CSS3 e JavaScript vanilla.

## 🌟 Características

- ⚡ **Angular 17+** com Standalone Components
- ⚡ **HTML5, CSS3 e JavaScript** puro - sem frameworks
- 🎨 **Design Moderno** com gradientes e animações suaves
- 📱 **Totalmente Responsivo** para todos os dispositivos
- 🔥 **Performance Otimizada** com JavaScript vanilla
- 📝 **Formulários Reativos** com validação
- 📝 **Formulário de Contato** com validação completa
- 🎯 **SEO Friendly** com meta tags otimizadas
- ♿ **Acessível** seguindo boas práticas
- 🚀 **Deploy Automático** no GitHub Pages
- 📧 **Sistema de Contato** funcional
- 📧 **Formulário de Contato** com validação
- 🎨 **Animações CSS** e transições suaves

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Angular 17+, HTML5, CSS3, JavaScript ES6+
- **Ícones**: Lucide Angular, Font Awesome
- **Formulários**: Angular Reactive Forms
- **Roteamento**: Angular Router
- **Build**: Angular CLI
- **Deploy**: GitHub Pages com GitHub Actions
- **Tipografia**: Google Fonts (Inter)

## 📦 Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/angular-portfolio.git
cd angular-portfolio
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Execute o projeto localmente**
\`\`\`bash
npm start
\`\`\`

4. **Acesse no navegador**
\`\`\`
http://localhost:4200
\`\`\`

## 📦 Estrutura do Projeto

\`\`\`
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── navigation/      # Navegação principal
│   │   └── footer/          # Rodapé
│   ├── pages/               # Páginas da aplicação
│   │   ├── home/            # Página inicial
│   │   ├── about/           # Sobre mim
│   │   ├── skills/          # Habilidades
│   │   ├── projects/        # Projetos
│   │   └── contact/         # Contato
│   ├── app.component.ts     # Componente raiz
│   └── app.routes.ts        # Configuração de rotas
├── assets/                  # Recursos estáticos
├── styles.css              # Estilos globais
└── index.html              # HTML principal
\`\`\`

\`\`\`
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principais
├── js/
│   ├── main.js           # JavaScript principal
│   └── data.js           # Dados dos projetos
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions
└── README.md
\`\`\`

## 🚀 Como usar

### 1. Clone o repositório
\`\`\`bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
\`\`\`

### 2. Personalize o conteúdo
- Edite `index.html` com suas informações
- Atualize `js/data.js` com seus projetos
- Modifique `css/style.css` para personalizar o design

### 3. Deploy no GitHub Pages
1. Faça push para o repositório
2. Vá em Settings > Pages
3. Selecione "GitHub Actions" como source
4. O site será deployado automaticamente

## 📱 Páginas/Seções Incluídas

- **🏠 Home**: Apresentação, hero section e call-to-actions
- **👤 Sobre**: História pessoal, experiência e formação
- **⚡ Habilidades**: Skills técnicas com barras de progresso animadas
- **💼 Projetos**: Portfólio com filtros interativos
- **📧 Contato**: Formulário funcional e informações de contato

## 🎨 Personalização

### Cores e Tema
Edite o arquivo `tailwind.config.js` para personalizar as cores:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6', // Azul principal
        600: '#2563eb',
        // ...
      }
    }
  }
}
\`\`\`

Edite as variáveis CSS em `css/style.css`:
\`\`\`css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    /* ... outras cores */
}
\`\`\`

### Informações Pessoais
Atualize os dados pessoais nos componentes:

1. **Informações básicas**: `src/app/pages/home/home.component.ts`
2. **Sobre**: `src/app/pages/about/about.component.ts`
3. **Habilidades**: `src/app/pages/skills/skills.component.ts`
4. **Projetos**: `src/app/pages/projects/projects.component.ts`
5. **Contato**: `src/app/pages/contact/contact.component.ts`

Edite diretamente no `index.html`:
- Nome e título
- Descrições
- Links de redes sociais
- Informações de contato

### Projetos
Atualize o array `projectsData` em `js/data.js`:
\`\`\`javascript
const projectsData = [
    {
        id: 1,
        title: "Seu Projeto",
        description: "Descrição do projeto...",
        // ... outras propriedades
    }
];
\`\`\`

## 🔧 Scripts Disponíveis

\`\`\`bash
npm start          # Servidor de desenvolvimento
npm run build      # Build para produção
npm run build:prod # Build otimizado para GitHub Pages
npm test           # Executar testes
npm run lint       # Verificar código
npm run deploy     # Deploy manual para GitHub Pages
\`\`\`

## ⚡ Funcionalidades

### JavaScript
- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Filtros de projetos interativos
- ✅ Animações de scroll
- ✅ Validação de formulário
- ✅ Modal de sucesso
- ✅ Barras de progresso animadas
- ✅ Scroll to top
- ✅ Navegação por teclado

### CSS
- ✅ Flexbox e CSS Grid
- ✅ Animações e transições
- ✅ Gradientes modernos
- ✅ Sombras e efeitos
- ✅ Design responsivo
- ✅ Variáveis CSS
- ✅ Media queries

## 🌐 Demo

Veja o portfólio em ação: [https://seu-usuario.github.io/angular-portfolio/](https://seu-usuario.github.io/angular-portfolio/) e [https://seu-usuario.github.io/portfolio/](https://seu-usuario.github.io/portfolio/)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

**Diogo Bassalobre**
- 📧 Email: diogo.bassalobre@gmail.com
- 💼 LinkedIn: [linkedin.com/in/diogo-bassalobre-a31a29272](https://linkedin.com/in/diogo-bassalobre-a31a29272)
- 🐱 GitHub: [github.com/diogobssdev](https://github.com/diogobssdev)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
