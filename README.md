# Pro Gym App v1.5 🏋️

Sistema profissional de gestão de treinos e performance (PWA), atualizado com arquitetura de dados assíncrona de alta performance.

---

## 📋 Visão Geral

O **Pro Gym App (v1.5)** eleva o padrão da aplicação migrando a persistência de dados para **IndexedDB**, garantindo performance não-bloqueante (Non-blocking I/O) e escalabilidade para anos de histórico de treinamento.

A interface mantém a estética **Clean Dark & Technical**, mas o motor interno foi reescrito para suportar grandes volumes de dados biométricos e logs de carga sem comprometer a fluidez da UI (60fps).

---

## 🚀 Stack Tecnológica (v1.5)

**Core:** HTML5, JavaScript (ES6+ Async/Await), CSS3  
**Architecture:** IndexedDB Wrapper (Promise-based) & Service Workers  
**UI/UX:** Tailwind CSS + Glassmorphism  
**Persistência:** **IndexedDB** (`ProGymDB`) com migração automática de legado (`localStorage`).  
**Hosting:** PWA Installable (Manifest v2)

---

## ✨ Novidades da Versão 1.5

### 💾 Arquitetura IndexedDB

- Substituição do `localStorage` (síncrono/limitado) pelo **IndexedDB** (assíncrono/robusto).
- Classe wrapper `GymDatabase` personalizada para manipulação de dados baseada em Promises.
- Migração automática: O sistema detecta e importa dados antigos do localStorage na primeira execução.

### ⚡ Performance & UX

- Operações de I/O (Salvar/Carregar) movidas para fora da thread principal de renderização.
- **Splash Screen Ativa:** Feedback visual ("Carregando Database...") durante a inicialização assíncrona.
- Melhoria no sistema de Cache Busting via Service Worker atualizado.

---

## 📂 Estrutura do Projeto

```text
pro-gym-app/
├── css/
│   └── style.css          # Estilos v1.5 (Animações Quantum & Layout)
├── js/
│   └── script.js          # Core Logic + GymDatabase Class (IDB Wrapper)
├── assets/
│   └── img/               # Assets otimizados
├── index.html             # App Shell (Updated for Async Init)
├── manifest.json          # PWA Config
├── service-worker.js      # Cache Strategy (Stale-while-revalidate / IDB-First)
└── README.md              # Documentação Técnica
```

---

## 🛠️ Instalação e Uso

1. **Acesso Web:** Navegue até a URL de deploy.
2. **Instalação PWA:**
   - **iOS:** Toque em "Compartilhar" > "Adicionar à Tela de Início".
   - **Android:** Toque no banner "Adicionar Pro Gym à tela inicial" ou via menu do Chrome.
3. **Uso Offline:** O App funciona 100% offline após o primeiro carregamento, sincronizando com o IndexedDB local.

---

## 🛡️ Privacidade e Dados

- **Local-First:** Todos os dados (treinos, biometria, notas) residem exclusivamente no dispositivo do usuário (IndexedDB).
- **Backup:** Ferramenta integrada de Exportação/Importação (JSON) para backup manual.

---

## 📄 Licença

Copyright (c) 2025 **Fernando Rodrigues**.
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
