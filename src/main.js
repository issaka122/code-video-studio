const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');
const codeInput = document.getElementById('codeInput');
const promptInput = document.getElementById('promptInput');
const durationSelect = document.getElementById('durationSelect');
const generateBtn = document.getElementById('generateBtn');
const voicePreviewBtn = document.getElementById('voicePreviewBtn');
const statusEl = document.getElementById('status');
const downloadLink = document.getElementById('downloadLink');

let recorder;
let chunks = [];

function status(text, error = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle('error', error);
}

function draw(code, title, progress, elapsed, duration) {
  const w = canvas.width;
  const h = canvas.height;
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#08111f');
  bg.addColorStop(1, '#111827');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '700 32px Inter, sans-serif';
  ctx.fillText('CodeVideo Studio', 56, 58);
  ctx.fillStyle = '#7dd3fc';
  ctx.font = '600 22px Inter, sans-serif';
  ctx.fillText(`${Math.floor(elapsed / 60).toString().padStart(2, '0')}:${Math.floor(elapsed % 60).toString().padStart(2, '0')} / ${Math.floor(duration / 60).toString().padStart(2, '0')}:${Math.floor(duration % 60).toString().padStart(2, '0')}`, w - 245, 58);

  ctx.fillStyle = 'rgba(15,23,42,.92)';
  ctx.strokeStyle = 'rgba(148,163,184,.35)';
  ctx.lineWidth = 2;
  ctx.fillRect(56, 105, 820, 500);
  ctx.strokeRect(56, 105, 820, 500);
  ctx.fillStyle = '#7dd3fc';
  ctx.font = '600 24px Inter, sans-serif';
  ctx.fillText(title || 'Présentation du projet', 80, 145);

  const lines = (code || 'console.log("Hello world");').split('\n');
  const active = Math.min(lines.length - 1, Math.floor(progress * lines.length));
  ctx.font = '22px monospace';
  lines.forEach((line, index) => {
    const y = 190 + index * 34;
    if (y > 575) return;
    if (index === active) {
      ctx.fillStyle = 'rgba(56,189,248,.2)';
      ctx.fillRect(70, y - 25, 790, 30);
    }
    ctx.fillStyle = index === active ? '#f8fafc' : '#9fb8d9';
    ctx.fillText(line || ' ', 82, y);
  });

  ctx.fillStyle = 'rgba(15,23,42,.9)';
  ctx.fillRect(910, 105, 310, 500);
  ctx.fillStyle = '#a78bfa';
  ctx.font = '700 24px Inter, sans-serif';
  ctx.fillText('Aperçu vidéo', 940, 150);
  ctx.fillStyle = '#f8fafc';
  ctx.font = '500 22px Inter, sans-serif';
  const message = `Création de ${title || 'votre vidéo'} avec le code affiché et une narration simple.`;
  message.match(/.{1,25}(\s|$)/g)?.slice(0, 7).forEach((line, i) => ctx.fillText(line.trim(), 940, 205 + i * 34));
  ctx.fillStyle = '#34d399';
  ctx.font = '600 18px Inter, sans-serif';
  ctx.fillText('Export WebM disponible', 940, 555);
}

function generate() {
  if (!window.MediaRecorder || !canvas.captureStream) {
    status('Votre navigateur ne permet pas l’export vidéo. Utilisez Chrome ou Edge.', true);
    return;
  }
  const code = codeInput.value;
  const title = promptInput.value;
  const duration = Number(durationSelect.value);
  chunks = [];
  downloadLink.classList.add('hidden');
  status('Génération en cours...');
  recorder = new MediaRecorder(canvas.captureStream(30), { mimeType: 'video/webm' });
  recorder.ondataavailable = (event) => event.data.size && chunks.push(event.data);
  recorder.onstop = () => {
    downloadLink.href = URL.createObjectURL(new Blob(chunks, { type: 'video/webm' }));
    downloadLink.classList.remove('hidden');
    status('Vidéo générée avec succès.');
  };
  const start = performance.now();
  recorder.start();
  const frame = (now) => {
    const elapsed = Math.min((now - start) / 1000, duration);
    draw(code, title, elapsed / duration, elapsed, duration);
    if (elapsed < duration) requestAnimationFrame(frame);
    else recorder.stop();
  };
  requestAnimationFrame(frame);
}

voicePreviewBtn.addEventListener('click', () => {
  if (!('speechSynthesis' in window)) return status('Lecture vocale indisponible dans ce navigateur.', true);
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(promptInput.value || 'Voici votre vidéo générée.');
  utterance.lang = 'fr-FR';
  speechSynthesis.speak(utterance);
  status('Lecture vocale lancée.');
});

generateBtn.addEventListener('click', generate);
draw(codeInput.value, promptInput.value, 0.15, 0, 30);
