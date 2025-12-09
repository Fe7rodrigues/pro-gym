# Projeto Zoro v4.7 ⚔️

Aplicativo profissional de monitoramento de treinos de musculação, focado em alta densidade, progressão de carga e execução técnica precisa. Desenvolvido com tecnologias web modernas para uma experiência app-like fluida, agora com uma interface futurista imersiva.

---

## 📋 Visão Geral

O Projeto Zoro atingiu um novo patamar de sofisticação na versão **4.7**.  
Projetado especificamente para a rede **Panobianco Academia**, o app mapeia os equipamentos exatos da marca **Kikos** e oferece tutoriais em vídeo integrados para cada movimento.  
A interface foi totalmente redesenhada com uma estética **Cyberpunk/Retrowave**, focada em performance e motivação visual.

---

## 🚀 Tecnologias Utilizadas

**Core:** HTML5 Semântico, JavaScript (ES6+ Modular), CSS3 Avançado  
**Estilização:** Tailwind CSS + CSS Custom Properties & Keyframes  
**Ícones:** Lucide Icons  
**Mídia:** YouTube IFrame API (Embeds)  
**Persistência:** localStorage com gestão de estado reativa  

---

## ✨ Novas Funcionalidades (v4.7)

### 🎥 Tutoriais de Execução (YouTube Integration)

Aprenda a forma correta sem sair do app.

- **Vídeos Integrados:** Players do YouTube embutidos em cada card de exercício.  
- **Curadoria Panobianco:** Prioridade para vídeos da série *Fast Fit* do canal oficial, garantindo instrução compatível com os equipamentos reais.

---

### 🏋️ Mapeamento de Equipamentos KIKOS

Treine com precisão cirúrgica.

- **Identificação de Máquinas:** Cada exercício exibe o modelo exato do equipamento Kikos  
  *(ex: Kikos Plate Load PR70, Pro Station TTMS25)*.

---

### 🌌 Interface Futurista (Cyberpunk UI)

Uma experiência visual gamificada e energética.

- **Fundo Animado:** Grid 3D em movimento constante com efeito Retrowave.  
- **Efeitos Neon:** Botões e indicadores com brilho intenso e sombras coloridas.  
- **Responsividade:** Animações otimizadas via GPU para 60fps em dispositivos móveis.

---

## 🔥 Funcionalidades de Suporte

- **Lembrete Thermo Flame:** Cartão de destaque para lembrar da suplementação pré-treino.  
- **Temas de Personagem:**  
  Zoro (Verde), Luffy (Vermelho), Sanji (Azul) e Ace (Laranja).

---

## 📊 Ferramentas Analíticas & Utilitários

- **Dashboard de Stats:** Gráfico de barras em CSS puro para volume semanal.  
- **Calculadora de Anilhas:** Algoritmo para montagem rápida de barras olímpicas.  
- **Estimativa de 1RM:** Cálculo de força máxima teórica.  
- **Timer Hápitico:** Cronômetro com vibração e controle de áudio.

---

## 📂 Estrutura do Projeto

projeto-zoro-v5.0/
├── css/
│   └── style.css          # Estilos Cyberpunk, Animações 3D e Variáveis
├── js/
│   └── script.js          # Lógica de Negócio, YouTube Mapping e Store
├── assets/
│   └── img/
│       ├── icon.png       # Ícone do App (PWA)
│       └── logo.png       # Favicon
├── index.html             # App Shell, Modais, Views e Player de Vídeo
├── manifest.json          # Configuração do PWA (Ícones, Nome, Cores)
├── service-worker.js      # Cache para funcionamento Offline
└── README.md              # Documentação Técnica


---

## 🛠️ Como Executar Localmente

**Download:**  
Baixe os arquivos `index.html`, `style.css` e `script.js` para a mesma pasta.

**Execução:**

- **Simples:** Abra o arquivo `index.html` no navegador.  
- **Modo Dev:** Use a extensão **Live Server** no VS Code para hot-reload.  
- **Modo Mobile:** No desktop, pressione `F12` → `Ctrl + Shift + M` para simular toque.

---

## 🔒 Direitos Autorais

Todos os direitos reservados a **Fernando Rodrigues**.  
© 2025
