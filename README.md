# Pro Gym App v1.1 🏋️

Sistema profissional de gestão de treinos e performance, desenvolvido com foco em métricas, densidade de trabalho e uma interface técnica de alta precisão.

---

## 📋 Visão Geral

O **Pro Gym App (v1.1)** representa a evolução definitiva da plataforma, consolidando uma estética **Clean Dark & Technical**, livre de distrações.

Projetado para praticantes sérios e atletas, o aplicativo utiliza terminologia técnica da educação física e oferece ferramentas avançadas de análise de dados, como **gráficos de radar dinâmicos** e monitoramento de **RPE**, garantindo precisão absoluta na execução e no planejamento do treino.

---

## 🚀 Stack Tecnológica

**Core:** HTML5 Semântico, JavaScript (ES6+ Modular), CSS3 Avançado  
**UI/UX:** Tailwind CSS + Glassmorphism & Variáveis CSS Dinâmicas  
**Ícones:** Lucide Icons (Vetores otimizados)  
**Mídia:** YouTube IFrame API (Embeds leves)  
**Persistência:** localStorage com gestão de estado reativa e namespace isolado (`pro_gym_app_v1`)

---

## ✨ Funcionalidades da Versão 1.1

### 📈 Rastreamento de RPE (Novo!)

Monitoramento da Percepção Subjetiva de Esforço (Rating of Perceived Exertion) em escala de **6–10**, direto no card de exercício, permitindo autorregulação de carga.

### 🕸️ Gráfico de Radar SVG (Novo!)

Visualização dinâmica do equilíbrio físico.  
Um **Spider Chart em SVG puro**, sem bibliotecas externas.  
Mapeia o volume de treino semanal por grupo muscular:

- Peito
- Costas
- Pernas
- Ombros
- Braços

### 🖥️ Interface Profissional (Pro UI)

Design minimalista focado em usabilidade noturna (Dark Mode).

Temas Técnicos:

- 🔵 **Azul (Performance):** Foco e Precisão (Padrão)
- 🔴 **Vermelho (Hipertrofia):** Intensidade e Volume
- 🟢 **Verde (Resistência):** Condicionamento e Cadência
- 🟠 **Laranja (Força):** Carga Máxima e Potência
- 🩷 **Rosa (Energia):** Vitalidade e Dinamismo _(Novo na v1.1)_
- 🟣 **Roxo (Cósmico):** Foco Mental Profundo _(Novo na v1.1)_

**Glassmorphism:** Elementos translúcidos para hierarquia visual moderna.

---

## 📊 Painel de Controle (Dashboard)

- Visualização de dados em tempo real
- Heatmap de Consistência (estilo GitHub Contributions)
- Ranks Profissionais (Iniciante → Pro)
- Métricas de Volume (tonelagem total por sessão)

---

## 🏋️ Rotina Split A–F (6 Dias)

**A:** Peitoral & Abdômen (Foco em Peito)  
**B:** Dorsais & Lombar (Foco em Costas)  
**C:** Quadríceps & Panturrilha (Foco em Pernas)  
**D:** Ombros & Trapézio (Foco em Ombros)  
**E:** Bíceps & Tríceps (Foco em Braços)  
**F:** Posterior & Glúteos (Foco em Glúteos)

---

## 🛠️ Utilitários Integrados

- **Calculadora 1RM:** Fórmulas de Epley/Brzycki
- **Montagem de Barra:** Cálculo de anilhas para barra olímpica (20kg)
- **Timer Hápitico:** Feedback vibratório para descanso

---

## 📂 Estrutura do Projeto

```text
pro-gym-app/
├── css/
│   └── style.css          # Variáveis de Tema, Glassmorphism e Animações
├── js/
│   └── script.js          # Lógica de Negócio, Store e Gestão de Estado
├── assets/
│   └── img/
│       ├── icon.png       # Ícone do App (PWA)
│       └── logo.png       # Favicon
├── index.html             # App Shell e Componentes de UI
├── manifest.json          # Configuração do PWA (Nome, Cores, Ícones)
├── service-worker.js      # Cache Estratégico (Offline First)
└── README.md              # Documentação Técnica

```

---

## 🛠️ Instalação e Execução

**Requisitos:** Navegador moderno com suporte a ES6+.  
**Local:** Baixe todos os arquivos e abra o `index.html`.  
**PWA:** Em dispositivos móveis, utilize _Adicionar à Tela de Início_ para instalar.  
**Reset:** Acesse **Configurações > Resetar Dados** para limpar o armazenamento local.

---

## 🔒 Direitos Autorais

Todos os direitos reservados a **Fernando Rodrigues**.  
Desenvolvido com precisão técnica. © 2025
