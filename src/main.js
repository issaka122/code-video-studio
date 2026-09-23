:root {
  --bg: #07111f;
  --bg-soft: #0f1b2d;
  --panel: rgba(15, 23, 42, 0.82);
  --panel-strong: rgba(9, 15, 29, 0.94);
  --line: rgba(148, 163, 184, 0.2);
  --text: #ebf3ff;
  --muted: #9cb2d3;
  --primary: #7dd3fc;
  --primary-strong: #38bdf8;
  --purple: #8b5cf6;
  --green: #34d399;
  --orange: #f59e0b;
  --danger: #fca5a5;
  --shadow: 0 20px 50px rgba(2, 6, 23, 0.45);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(59, 130, 246, 0.18), transparent 30%),
    linear-gradient(180deg, #020817 0%, #08111f 100%);
  color: var(--text);
}

button, input, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  width: min(1360px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 60px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 30px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--purple));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: white;
}

.eyebrow {
  margin: 0 0 2px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: var(--primary);
}

h1 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.3rem);
}

.topnav {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 0.92rem;
}

.topnav a {
  color: var(--muted);
  text-decoration: none;
}

.ghost-button,
.primary-button,
.secondary-button {
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 11px 18px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button {
  border: none;
  background: linear-gradient(135deg, var(--primary-strong), var(--purple));
  color: white;
  font-weight: 700;
}

.secondary-button {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
}

.secondary-button.small {
  padding: 8px 12px;
  font-size: 0.9rem;
}

.ghost-button {
  background: rgba(148, 163, 184, 0.05);
  color: var(--text);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: center;
  margin-bottom: 30px;
}

.hero-copy {
  padding: 12px 0;
}

.pill {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.12);
  border: 1px solid rgba(125, 211, 252, 0.2);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.hero-copy h2 {
  margin: 18px 0 12px;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 620px;
  line-height: 1.7;
}

.cta-row {
  display: flex;
  gap: 14px;
  margin: 24px 0 20px;
}

.stats {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.stats li {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stats strong {
  font-size: 1.5rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.88rem;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.hero-card {
  padding: 20px;
}

.mini-header {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green { background: var(--green); }
.dot.orange { background: var(--orange); }
.dot.blue { background: var(--primary); }

.scene-preview {
  background: rgba(10, 17, 29, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 20px;
}

.scene-preview h3 {
  margin: 0 0 12px;
  font-size: 1.1rem;
}

.scene-preview pre {
  margin: 0;
  white-space: pre-wrap;
  font-family: 'SFMono-Regular', Consolas, monospace;
  line-height: 1.7;
  color: #d6ecff;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 30px;
}

.feature-card {
  padding: 22px 20px;
}

.feature-tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}

.feature-tag.purple {
  background: rgba(139, 92, 246, 0.17);
  color: #d9c5ff;
}

.feature-tag.blue {
  background: rgba(59, 130, 246, 0.17);
  color: #bfd9ff;
}

.feature-tag.green {
  background: rgba(52, 211, 153, 0.16);
  color: #c7f7d9;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.18rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.studio-grid {
  display: grid;
  grid-template-columns: minmax(320px, 480px) minmax(0, 1fr);
  gap: 22px;
  margin-bottom: 26px;
}

.form-panel,
.preview-panel,
.history-panel {
  padding: 22px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.section-head h3 {
  margin: 0;
  font-size: 1.3rem;
}

.status-badge {
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.72rem;
  background: rgba(125, 211, 252, 0.12);
  border: 1px solid rgba(125, 211, 252, 0.2);
  color: var(--primary);
  font-weight: 700;
}

.status-badge.alt {
  background: rgba(52, 211, 153, 0.12);
  border-color: rgba(52, 211, 153, 0.24);
  color: var(--green);
}

label {
  display: block;
  margin: 16px 0 8px;
  color: #d8e6ff;
  font-weight: 600;
  font-size: 0.92rem;
}

input, textarea, select {
  width: 100%;
  background: rgba(1, 6, 15, 0.7);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
}

textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.wide {
  width: 100%;
  margin-top: 18px;
}

.status-text {
  min-height: 24px;
  margin-top: 14px;
  color: var(--primary);
  font-size: 0.92rem;
}

.status-text.error {
  color: var(--danger);
}

.preview-panel {
  display: flex;
  flex-direction: column;
}

#sceneCanvas {
  width: 100%;
  height: auto;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: #020817;
}

.result-card {
  margin-top: 18px;
  border: 1px solid var(--line);
  background: rgba(2, 6, 23, 0.7);
  border-radius: 16px;
  padding: 18px;
}

.result-label {
  margin: 0 0 10px;
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 0.72rem;
}

.result-card h4 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.result-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.download-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  min-height: 46px;
  padding: 10px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: #c8ffd5;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.25);
  font-weight: 700;
}

.hidden {
  display: none;
}

.history-panel {
  margin-top: 8px;
}

.project-list {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.project-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.7);
  border-radius: 12px;
  padding: 14px 16px;
}

.project-list strong {
  display: block;
}

.project-list span {
  color: var(--muted);
  font-size: 0.83rem;
}

.project-list button {
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(125, 211, 252, 0.08);
  border: 1px solid rgba(125, 211, 252, 0.2);
  color: var(--primary);
  font-weight: 700;
}

@media (max-width: 980px) {
  .hero,
  .studio-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
  }

  .topnav {
    order: 3;
    width: 100%;
    justify-content: space-between;
  }
}
