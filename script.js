// --- 1. DADOS (Data Layer) ---
const WORKOUT_PLAN = [
    {
        id: 'day-a', letter: 'A', title: 'Peitoral & Abdômen', focus: 'Empurrar Horizontal',
        exercises: [
            { id: 'a1', name: 'Supino Sentado Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'a2', name: 'Peck Deck (Voador)', sets: 4, reps: '12-15', rest: 45 },
            { id: 'a3', name: 'Supino Inclinado Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'a4', name: 'Cross Over Polia Média', sets: 4, reps: '12-15', rest: 45 },
            { id: 'a5', name: 'Abdominal Crunch Machine', sets: 4, reps: '15-20', rest: 45 },
            { id: 'a6', name: 'Rotação de Tronco', sets: 4, reps: '15-20', rest: 45 },
        ]
    },
    {
        id: 'day-b', letter: 'B', title: 'Dorsais & Lombar', focus: 'Puxar Vertical/Horizontal',
        exercises: [
            { id: 'b1', name: 'Puxada Alta Aberta', sets: 4, reps: '12-15', rest: 45 },
            { id: 'b2', name: 'Puxada Triângulo (Fechada)', sets: 4, reps: '12-15', rest: 45 },
            { id: 'b3', name: 'Remada Baixa Sentada', sets: 4, reps: '12-15', rest: 45 },
            { id: 'b4', name: 'Remada Máquina Pronada', sets: 4, reps: '12-15', rest: 45 },
            { id: 'b5', name: 'Pulldown Polia Alta', sets: 4, reps: '12-15', rest: 45 },
            { id: 'b6', name: 'Extensão Lombar Máquina', sets: 4, reps: '15', rest: 60 },
        ]
    },
    {
        id: 'day-c', letter: 'C', title: 'Quadríceps & Panturrilha', focus: 'Membros Inferiores Anterior',
        exercises: [
            { id: 'c1', name: 'Leg Press 45º (Pés Baixos)', sets: 4, reps: '12-15', rest: 60 },
            { id: 'c2', name: 'Hack Machine', sets: 4, reps: '12-15', rest: 60 },
            { id: 'c3', name: 'Cadeira Extensora', sets: 4, reps: '12-15', rest: 45 },
            { id: 'c4', name: 'Leg Press Horizontal', sets: 4, reps: '12-15', rest: 45 },
            { id: 'c5', name: 'Panturrilha Sentado', sets: 4, reps: '15-20', rest: 30 },
            { id: 'c6', name: 'Panturrilha no Leg Press', sets: 4, reps: '15-20', rest: 30 },
        ]
    },
    {
        id: 'day-d', letter: 'D', title: 'Ombros & Trapézio', focus: 'Deltóides Completo',
        exercises: [
            { id: 'd1', name: 'Desenvolvimento Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'd2', name: 'Elevação Lateral Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'd3', name: 'Elevação Frontal Polia', sets: 4, reps: '12-15', rest: 45 },
            { id: 'd4', name: 'Peck Deck Inverso', sets: 4, reps: '12-15', rest: 45 },
            { id: 'd5', name: 'Remada Alta Polia', sets: 4, reps: '12-15', rest: 45 },
            { id: 'd6', name: 'Encolhimento Máquina', sets: 4, reps: '15', rest: 45 },
        ]
    },
    {
        id: 'day-e', letter: 'E', title: 'Bíceps & Tríceps', focus: 'Braços Completos',
        exercises: [
            { id: 'e1', name: 'Tríceps Pulley Barra', sets: 4, reps: '12-15', rest: 45 },
            { id: 'e2', name: 'Tríceps Corda', sets: 4, reps: '12-15', rest: 45 },
            { id: 'e3', name: 'Tríceps Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'e4', name: 'Rosca Scott Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'e5', name: 'Rosca Direta Polia', sets: 4, reps: '12-15', rest: 45 },
            { id: 'e6', name: 'Rosca Martelo Polia', sets: 4, reps: '12-15', rest: 45 },
        ]
    },
    {
        id: 'day-f', letter: 'F', title: 'Posterior & Glúteos', focus: 'Cadeia Posterior',
        exercises: [
            { id: 'f1', name: 'Mesa Flexora', sets: 4, reps: '12-15', rest: 45 },
            { id: 'f2', name: 'Cadeira Flexora', sets: 4, reps: '12-15', rest: 45 },
            { id: 'f3', name: 'Cadeira Abdutora', sets: 4, reps: '15', rest: 45 },
            { id: 'f4', name: 'Glúteo Máquina', sets: 4, reps: '12-15', rest: 45 },
            { id: 'f5', name: 'Leg Press 45º (Pés Altos)', sets: 4, reps: '12-15', rest: 60 },
            { id: 'f6', name: 'Cadeira Adutora', sets: 4, reps: '15', rest: 45 },
        ]
    }
];

// --- 2. GERENCIAMENTO DE ESTADO (State Management) ---
const state = {
    completedSets: JSON.parse(localStorage.getItem('zoro_sets')) || {},
    weights: JSON.parse(localStorage.getItem('zoro_weights')) || {}, // Key: exerciseId
    cardioDone: JSON.parse(localStorage.getItem('zoro_cardio')) || {}, // Key: date-string
    activeWorkoutId: null
};

const saveState = () => {
    localStorage.setItem('zoro_sets', JSON.stringify(state.completedSets));
    localStorage.setItem('zoro_weights', JSON.stringify(state.weights));
};

// --- 3. TIMER LOGIC ---
const timer = {
    interval: null,
    timeLeft: 45,
    defaultTime: 45,
    isActive: false,
    audioContext: null,
    
    initAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    playBeep() {
        if (!this.audioContext) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime); // A5
        oscillator.frequency.exponentialRampToValueAtTime(440, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.2);
    },

    start(duration) {
        this.initAudio();
        this.defaultTime = duration;
        this.timeLeft = duration;
        this.isActive = true;
        document.getElementById('timer-modal').classList.remove('hidden');
        this.render();
        this.run();
    },
    
    run() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.render();
            } else {
                this.playBeep();
                this.pause();
                // Vibrar se suportado
                if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
            }
        }, 1000);
        this.updateToggleButton(true);
    },

    addTime(seconds) {
        this.timeLeft += seconds;
        this.render();
    },
    
    toggle() {
        if (this.isActive) this.pause();
        else { this.isActive = true; this.run(); }
    },
    
    pause() {
        this.isActive = false;
        clearInterval(this.interval);
        this.updateToggleButton(false);
    },
    
    reset() {
        this.timeLeft = this.defaultTime;
        this.render();
        this.isActive = true;
        this.run();
    },
    
    close() {
        this.pause();
        document.getElementById('timer-modal').classList.add('hidden');
    },

    render() {
        const display = document.getElementById('timer-display');
        display.innerText = `00:${this.timeLeft < 10 ? '0' + this.timeLeft : this.timeLeft}`;
        if(this.timeLeft === 0) {
            display.classList.add('text-green-500');
            display.innerText = "PRONTO!";
        }
        else display.classList.remove('text-green-500');
    },

    updateToggleButton(isPlaying) {
        const btn = document.getElementById('timer-toggle-btn');
        // Lucide icons replace
        btn.innerHTML = isPlaying ? '<i data-lucide="pause" class="w-4 h-4"></i>' : '<i data-lucide="play" class="w-4 h-4"></i>';
        lucide.createIcons();
    }
};

// --- 4. RENDERIZAÇÃO (View Layer) ---
const router = {
    container: document.getElementById('main-content'),
    nav: document.getElementById('bottom-nav'),

    navigate(route, params) {
        this.container.innerHTML = '';
        if (route === 'home') {
            this.renderHome();
            this.nav.classList.remove('hidden');
            state.activeWorkoutId = null;
        } else if (route === 'detail') {
            this.renderDetail(params);
            this.nav.classList.add('hidden');
            state.activeWorkoutId = params.id;
        }
        lucide.createIcons();
    },

    renderHome() {
        const header = `
            <div class="pt-6 px-4 mb-6 animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h1 class="text-3xl font-bold tracking-tight text-white">Projeto <span class="text-green-500">Zoro</span></h1>
                        <p class="text-zinc-400 text-sm">Fernando Rodrigues • ABCDEF</p>
                    </div>
                    <div class="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                        <i data-lucide="user" class="w-5 h-5 text-green-500"></i>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 p-4 rounded-2xl flex items-center gap-4 mb-6">
                    <div class="bg-red-500/20 p-2 rounded-lg">
                        <i data-lucide="flame" class="w-6 h-6 text-red-500"></i>
                    </div>
                    <div>
                        <h4 class="text-red-200 font-bold">Thermo Flame Ativo</h4>
                        <p class="text-red-400/60 text-xs">Tome 30min antes do treino.</p>
                    </div>
                </div>

                <div class="grid gap-4">
                    ${WORKOUT_PLAN.map(day => `
                        <button onclick="router.navigate('detail', {id: '${day.id}'})" 
                            class="card-workout w-full group relative overflow-hidden bg-zinc-900 border border-zinc-800 p-5 rounded-2xl text-left hover:border-green-500/50">
                            <div class="absolute top-0 right-0 p-3 opacity-10">
                                <i data-lucide="dumbbell" class="w-16 h-16"></i>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 font-bold text-xl border border-green-500/20">
                                    ${day.letter}
                                </div>
                                <div>
                                    <h3 class="text-white font-semibold text-lg">${day.title}</h3>
                                    <p class="text-zinc-500 text-xs uppercase tracking-wider">${day.focus}</p>
                                </div>
                            </div>
                        </button>
                    `).join('')}
                </div>

                <!-- Footer com Direitos Reservados -->
                <div class="mt-8 mb-4 text-center">
                    <p class="text-zinc-700 text-[10px] uppercase tracking-widest font-bold">
                        © ${new Date().getFullYear()} Fernando Rodrigues
                    </p>
                    <p class="text-zinc-800 text-[9px] mt-1">
                        Todos os direitos reservados
                    </p>
                </div>
            </div>
        `;
        this.container.innerHTML = header;
    },

    renderDetail(params) {
        const workout = WORKOUT_PLAN.find(w => w.id === params.id);
        if (!workout) return;

        // Calcular progresso
        const totalSets = workout.exercises.length * 4;
        let completedCount = 0;
        workout.exercises.forEach(ex => {
            for(let i=0; i<4; i++) {
                if (state.completedSets[`${ex.id}-${i}`]) completedCount++;
            }
        });
        const progress = Math.round((completedCount / totalSets) * 100);

        const html = `
            <div class="animate-slide-right pb-32">
                <!-- Header Sticky -->
                <div class="glass-header sticky top-0 z-10 px-4 py-4 flex items-center gap-4">
                    <button onclick="router.navigate('home')" class="p-2 -ml-2 rounded-full hover:bg-zinc-800 text-zinc-400">
                        <i data-lucide="chevron-left" class="w-6 h-6"></i>
                    </button>
                    <div class="flex-1">
                        <h2 class="text-white font-bold text-lg leading-none">${workout.title}</h2>
                        <p class="text-green-500 text-xs font-mono mt-1">TREINO ${workout.letter} • <span id="progress-text">${progress}%</span> CONCLUÍDO</p>
                    </div>
                    <button onclick="resetWorkout('${workout.id}')" class="text-xs text-red-500 font-bold border border-red-500/30 px-3 py-1 rounded hover:bg-red-500/10 transition">
                        RESETAR
                    </button>
                </div>

                <div class="px-4 py-6 space-y-6">
                    ${workout.exercises.map((ex, idx) => `
                        <div class="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                            <div class="flex justify-between items-start mb-4">
                                <div class="flex-1 mr-4">
                                    <span class="text-zinc-500 text-xs font-bold mb-1 block">EXERCÍCIO ${idx + 1}</span>
                                    <h3 class="text-white font-semibold text-lg leading-tight mb-2">${ex.name}</h3>
                                    
                                    <!-- Input de Peso -->
                                    <div class="flex items-center gap-2">
                                        <i data-lucide="weight" class="w-4 h-4 text-zinc-500"></i>
                                        <input 
                                            type="number" 
                                            placeholder="kg"
                                            value="${state.weights[ex.id] || ''}"
                                            onchange="saveWeight('${ex.id}', this.value)"
                                            class="input-weight w-20 py-1 text-sm font-bold bg-black/50 border-zinc-700 focus:border-green-500"
                                        />
                                        <span class="text-zinc-600 text-xs">carga</span>
                                    </div>
                                </div>
                                <div class="bg-zinc-800 px-2 py-1 rounded text-xs text-zinc-400 font-mono flex flex-col items-center">
                                    <i data-lucide="timer" class="w-3 h-3 mb-1"></i>
                                    ${ex.rest}s
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-4 gap-2">
                                ${[0, 1, 2, 3].map(i => {
                                    const isDone = state.completedSets[`${ex.id}-${i}`];
                                    const activeClass = isDone ? 'active' : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600';
                                    return `
                                        <button id="btn-${ex.id}-${i}" 
                                            onclick="toggleSet('${ex.id}', ${i}, ${ex.rest})"
                                            class="btn-set ${activeClass} h-12 rounded-lg flex flex-col items-center justify-center border">
                                            <span class="text-xs font-bold">SET ${i + 1}</span>
                                            <span class="text-[10px] opacity-80">${ex.reps}</span>
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}

                    <!-- CARDIO -->
                    <div id="cardio-card" class="rounded-2xl p-5 border transition-all ${state.cardioDone[getTodayKey()] ? 'bg-green-900/20 border-green-500/50' : 'bg-zinc-900 border-zinc-800'}">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="bg-orange-500/20 p-2 rounded-lg">
                                <i data-lucide="flame" class="w-6 h-6 text-orange-500"></i>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-white font-bold">Cardio Pós-Treino</h3>
                                <p class="text-zinc-400 text-sm">Esteira • 20 Minutos</p>
                            </div>
                            <button onclick="toggleCardio()" id="cardio-btn" class="h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all ${state.cardioDone[getTodayKey()] ? 'bg-green-500 border-green-500 text-black' : 'border-zinc-600'}">
                                <i data-lucide="check-circle-2" class="w-4 h-4 ${state.cardioDone[getTodayKey()] ? '' : 'opacity-0'}"></i>
                            </button>
                        </div>
                        <div id="cardio-bars" class="${state.cardioDone[getTodayKey()] ? 'hidden' : ''} space-y-2">
                            <div class="flex justify-between text-xs text-zinc-500">
                                <span>Aquecimento (2')</span>
                                <span>HIIT (16')</span>
                                <span>Calma (2')</span>
                            </div>
                            <div class="h-2 bg-zinc-800 rounded-full overflow-hidden flex">
                                <div class="w-[10%] bg-blue-500"></div>
                                <div class="w-[80%] bg-orange-500"></div>
                                <div class="w-[10%] bg-green-500"></div>
                            </div>
                        </div>
                    </div>

                    <button onclick="router.navigate('home')" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl mt-4 mb-8 border border-zinc-700">
                        VOLTAR AO MENU
                    </button>
                </div>
            </div>
        `;
        this.container.innerHTML = html;
        lucide.createIcons();
    }
};

// --- 5. LÓGICA DE INTERAÇÃO ---

function getTodayKey() {
    return new Date().toISOString().split('T')[0];
}

function toggleSet(exerciseId, setIndex, restTime) {
    const key = `${exerciseId}-${setIndex}`;
    const btn = document.getElementById(`btn-${key}`);
    const isComplete = !state.completedSets[key];

    state.completedSets[key] = isComplete;
    saveState();

    // Atualizar UI
    if (isComplete) {
        btn.className = "btn-set active h-12 rounded-lg flex flex-col items-center justify-center border";
        // Iniciar Timer
        timer.start(restTime);
    } else {
        btn.className = "btn-set bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600 h-12 rounded-lg flex flex-col items-center justify-center border";
    }
}

function saveWeight(exerciseId, value) {
    state.weights[exerciseId] = value;
    saveState();
}

function resetWorkout(workoutId) {
    if(!confirm('Tem certeza? Isso apagará o progresso de hoje deste treino.')) return;
    
    const workout = WORKOUT_PLAN.find(w => w.id === workoutId);
    workout.exercises.forEach(ex => {
        for(let i=0; i<4; i++) {
            delete state.completedSets[`${ex.id}-${i}`];
        }
    });
    saveState();
    router.renderDetail({id: workoutId});
}

function toggleCardio() {
    const key = getTodayKey();
    const isDone = !state.cardioDone[key];
    state.cardioDone[key] = isDone;
    localStorage.setItem('zoro_cardio', JSON.stringify(state.cardioDone));

    // Re-renderizar apenas o card de cardio (simplificado: recarrega a view)
    router.renderDetail({id: state.activeWorkoutId});
}

function finishWorkout() {
    if(confirm('Finalizar treino e voltar ao menu?')) {
        router.navigate('home');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');
});