Projeto Zoro v3.1 ⚔️

Aplicativo profissional de monitoramento de treinos de musculação, focado em alta densidade, progressão de carga e gamificação. Desenvolvido com tecnologias web modernas para uma experiência app-like fluida e responsiva.

📋 Visão Geral

O Projeto Zoro evoluiu para uma plataforma completa de gestão de performance física. Além do cronograma de treinos ABCDEF, a versão v3.1 introduz elementos de RPG (Gamificação), personalização visual (Temas) e métricas avançadas de volume de carga (Tonagem), mantendo a arquitetura leve e sem dependências de build complexas.

🚀 Tecnologias Utilizadas

Core: HTML5 Semântico, JavaScript (ES6+ Modular), CSS3.

Estilização: Tailwind CSS (via CDN) + CSS Custom Properties para temas dinâmicos.

Ícones: Lucide Icons (Leves e vetoriais).

Fontes: Inter (UI) & JetBrains Mono (Dados/Números).

Persistência: localStorage com gestão de estado reativa.

✨ Novas Funcionalidades (v3.1)

🎮 Gamificação & Ranks

Transforme o treino em uma jornada de RPG. Ganhe XP a cada série concluída e suba de nível:

Ranks: Aprendiz ➔ Caçador de Piratas ➔ Supernova ➔ Shichibukai ➔ Yonkou ➔ Rei do Inferno.

Barra de Progresso: Visualização em tempo real do XP necessário para o próximo nível.

🎨 Sistema de Temas (Personagens)

Personalize a interface com base nos seus personagens favoritos:

Zoro (Padrão): Verde Neon & Preto.

Luffy: Vermelho Intenso.

Sanji: Azul Profundo.

Ace: Laranja Fogo.

📊 Métricas Avançadas

Tonagem (Volume Load): Cálculo automático do peso total levantado no treino (Séries × Repetições Estimadas × Carga).

Calendário de Consistência: Heatmap semanal para monitorar sua frequência (Meta: 6/7 dias).

Conclusão de Missão: Feedback visual e sonoro ao finalizar 100% do treino diário.

⚙️ Funcionalidades Core Melhoradas

Timer Inteligente: Cronômetro de 45s automático com opção de Mute e adição rápida de tempo (+10s).

Notas Técnicas: Campo de texto persistente por exercício para registrar ajustes de máquina (banco, pino, pegada).

Backup de Dados: Exportação e Importação de progresso via arquivo JSON (segurança contra limpeza de cache).

📂 Estrutura do Projeto

projeto-zoro-v3/
├── index.html     # Estrutura, Modais e Layout App Shell
├── style.css      # Variáveis de Tema (:root), Animações e Glassmorphism
├── script.js      # Lógica de Estado (Store), Roteamento e Regras de Negócio
└── README.md      # Documentação Técnica


🛠️ Como Executar Localmente

Download: Baixe os arquivos index.html, style.css e script.js para uma mesma pasta.

Execução:

Simples: Abra o index.html diretamente no seu navegador.

Recomendado (VS Code): Instale a extensão "Live Server", clique com o botão direito no index.html e selecione "Open with Live Server".

Modo Mobile: No navegador Desktop, pressione F12 para abrir o DevTools e ative a simulação de dispositivo móvel (Ctrl+Shift+M) para visualizar a interface responsiva.

🔒 Direitos Autorais

Todos os direitos reservados a Fernando Rodrigues.
© 2025