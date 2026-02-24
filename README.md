# 🌱 Looply - Jogue. Recicle. Conserve.

O **Looply** é uma plataforma educativa gamificada projetada para transformar o aprendizado sobre sustentabilidade em uma experiência interativa, visual e envolvente. 
Através de trilhas de conhecimento, vídeos e questionários dinâmicos, os usuários evoluem de uma pequena "Semente" até se tornarem "Guardiões do Planeta".

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Tecnologias](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS-blue)

---

## 🚀 Funcionalidades Principais

### Trilhas de Conhecimento (9 Categorias)
A plataforma conta com um currículo completo dividido em trilhas gratuitas e avançadas:
- **Essenciais:** Reciclagem Básica, Energia Limpa, Preservação Hídrica, Biodiversidade e Consumo Consciente.
- **Especializadas (Premium):** Mudanças Climáticas, Objetivos de Desenvolvimento Sustentável (ODS), Economia Circular e Cidades Inteligentes.

### Gamificação e Progressão
- **Sistema de 10 Níveis:** Evolução visual e nominal do perfil (🌱 Semente, 🌿 Broto, 🪴 Muda, 🌾 Árbusto, 🌳 Árvore, 🎋 Bosque, 🪵 Floresta, 🌊 Oceano, 🌎 Terra, 🌟 Guardião do Planeta).
- **Sistema de XP:** Ganho de pontos por atividades concluídas e vídeos assistidos.
- **Questões Dinâmicas:** Banco de dados com **135 perguntas exclusivas**. O sistema alterna o desafio caso o usuário erre, garantindo a fixação do conteúdo.

### Aprendizagem Multimídia
- Integração de vídeos educativos em todas as trilhas (Gratuitas e Premium).
- Resumos teóricos contextualizados antes de cada desafio prático.

### Interface Refinada (UI/UX)
- **Modo Escuro/Claro:** Suporte nativo para ambos os temas com persistência de escolha.
- **Fidelidade Visual:** Cores das lixeiras presentes no game interativo esstão ajustadas aos padrões internacionais.
- **Efeitos Visuais:** Fundo animado com partículas interativas na Landing Page cobrindo toda a área principal e animação entre páginas.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web puras (Vanilla Tech Stack) para garantir performance, leveza e compatibilidade:

- **HTML:** Estrutura semântica das páginas.
- **CSS:** Estilização moderna com Variáveis (Custom Properties), Flexbox e Grid.
- **JavaScript:** Lógica de estado, manipulação de DOM e sistema de progresso.
- **LocalStorage:** Persistência de dados do usuário (XP, trilhas concluídas e preferência de tema).

---

## 📦 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/chiquettz/looply.git](https://github.com/chiquettz/looply.git)

---

## 📂 Estrutura de Arquivos

- `index.html`: Landing page com efeito de partículas e introdução.
- `trilhas.html`: Dashboard principal com a listagem de categorias e progresso geral.
- `trilha.html`: Interface de aprendizado, exibição de vídeos e execução do quiz.
- `perfil.html`: Visualização detalhada do progresso, nível atual e estatísticas.
- `data.js`: O "coração" do projeto, contendo as 135 questões, níveis e metadados das trilhas.
- `app.js`: Motor de navegação, gestão de estado (XP/User) e utilitários.
- `style.css`: Design responsivo, animações e definições de tema.
