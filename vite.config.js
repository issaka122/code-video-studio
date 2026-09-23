import express from 'express';
import cors from 'cors';
import { randomUUID } from 'crypto';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '5mb' }));

const projects = new Map();

function buildScript(prompt, code, duration) {
  const lines = (code || '').split('\n').filter(Boolean);
  const preview = lines.slice(0, 4).join(' • ') || 'console.log("hello world")';

  return {
    id: randomUUID(),
    title: prompt || 'Présentation produit',
    summary: `Vidéo de ${Math.max(1, Number(duration) || 60)} secondes créée à partir d’un prompt technique et d’un extrait de code.`,
    prompt,
    code,
    duration: Number(duration) || 60,
    status: 'ready',
    createdAt: new Date().toISOString(),
    script: [
      `Bonjour, aujourd’hui on présente : ${prompt || 'notre solution technique'}.`,
      `Le cœur de la logique est structuré autour de cette section : ${preview.slice(0, 120)}.`,
      'Nous mettons en avant le design, la performance et la simplicité d’utilisation.',
      'La vidéo termine avec un message clair : prêt pour le déploiement et l’usage réel.'
    ],
    storyboard: [
      'Introduction de l’idée',
      'Présentation du code',
      'Explication des points clés',
      'Conclusion et CTA'
    ],
    voiceover: 'Narration générée à partir du prompt et du code fourni.',
    downloadUrl: '/downloads/demo-video.mp4'
  };
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'code-video-studio', timestamp: new Date().toISOString() });
});

app.get('/api/projects', (req, res) => {
  res.json([...projects.values()].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
});

app.get('/api/projects/:id', (req, res) => {
  const item = projects.get(req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Projet introuvable' });
  }
  return res.json(item);
});

app.post('/api/generate', (req, res) => {
  const { title, prompt, code, duration } = req.body || {};
  const project = buildScript(prompt || title || 'Présentation produit', code || '', duration || 60);
  project.title = title || project.title;
  projects.set(project.id, project);
  res.status(201).json(project);
});

app.listen(port, () => {
  console.log(`CodeVideo Studio API listening on http://localhost:${port}`);
});
