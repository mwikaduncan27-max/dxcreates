:root {
  --bg-dark: #081426;
  --bg-panel: #0f1f36;
  --bg-panel-strong: #122943;
  --primary: #1d4ed8;
  --secondary: #34d399;
  --accent: #f6ba43;
  --text: #edf6ff;
  --muted: #b5c7d9;
  --danger: #ff6b6b;
  --surface: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.08);
  --shadow: rgba(8, 20, 38, 0.35);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(160deg, #06111f 0%, #0b1c2e 100%);
  color: var(--text);
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  width: min(760px, calc(100% - 28px));
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 2vw + 1rem, 3rem);
}

.todo-panel {
  background: rgba(17, 29, 47, 0.9);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 24px 52px var(--shadow);
}

.todo-form {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
}

#todo-input {
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(7, 14, 25, 0.8);
  color: var(--text);
  border-radius: 12px;
  padding: 14px 16px;
}

#todo-input:focus {
  outline: 2px solid rgba(52, 211, 153, 0.45);
  border-color: rgba(52, 211, 153, 0.4);
}

.primary-btn,
.secondary-btn,
.filter-btn,
.delete-btn {
  border: none;
  border-radius: 12px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn:hover,
.secondary-btn:hover,
.filter-btn:hover,
.delete-btn:hover {
  transform: translateY(-1px);
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 12px 18px;
  font-weight: 700;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  padding: 10px 14px;
  border: 1px solid var(--border);
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 8px 12px;
}

.filter-btn.active {
  background: rgba(29, 78, 216, 0.18);
  color: var(--text);
  border-color: rgba(29, 78, 216, 0.5);
}

.summary {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.todo-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 16px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: var(--muted);
}

.todo-check {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
}

.todo-check input {
  position: absolute;
  opacity: 0;
  inset: 0;
}

.checkmark {
  position: absolute;
  inset: 0;
  border-radius: 7px;
  border: 2px solid rgba(255, 255, 255, 0.32);
  background: rgba(255, 255, 255, 0.02);
}

.todo-check input:checked + .checkmark {
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  border-color: transparent;
}

.todo-check input:checked + .checkmark::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.todo-text {
  overflow-wrap: anywhere;
  word-break: break-word;
}

.delete-btn {
  background: rgba(255, 107, 107, 0.1);
  color: #ffb0b0;
  border: 1px solid rgba(255, 107, 107, 0.2);
  padding: 8px 10px;
}

.empty-state {
  text-align: center;
  padding: 26px 18px;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 560px) {
  .topbar,
  .todo-form,
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .todo-item {
    grid-template-columns: auto 1fr;
  }

  .delete-btn {
    grid-column: 2;
    justify-self: end;
  }
}
