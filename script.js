* {
  box-sizing: border-box;
}

:root {
  --bg: #081426;
  --bg-soft: #0f1f36;
  --panel: #101f35;
  --panel-alt: #172b46;
  --primary: #1d4ed8;
  --secondary: #34d399;
  --accent: #f6ba43;
  --text: #edf6ff;
  --muted: #b4c7d9;
  --light: #dbeafe;
  --white: #ffffff;
  --shadow: rgba(8, 20, 38, 0.3);
  --radius: 18px;
  --max-width: 1200px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #06111f 0%, #0d1b2a 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(var(--max-width), calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(8, 20, 38, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(29, 78, 216, 0.35);
}

.brand-name {
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--white);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  font-weight: 700;
  box-shadow: 0 15px 32px rgba(52, 211, 153, 0.24);
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: var(--white);
  font-size: 1.8rem;
  cursor: pointer;
}

.hero {
  padding: 72px 0 50px;
  background: radial-gradient(circle at top left, rgba(29, 78, 216, 0.38), transparent 48%),
              radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.2), transparent 32%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(13, 27, 42, 0.7);
  color: var(--light);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero h1 {
  margin: 22px 0 18px;
  font-size: clamp(2.5rem, 3vw + 1rem, 4.5rem);
  line-height: 1.1;
}

.hero h1 .highlight {
  background: linear-gradient(90deg, var(--accent), #fff5d5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 12px 22px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  box-shadow: 0 16px 34px rgba(29, 78, 216, 0.28);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  color: var(--white);
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 32px;
}

.stat {
  min-width: 120px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(15, 31, 54, 0.82);
  box-shadow: var(--shadow) 0 18px 35px;
}

.stat strong {
  display: block;
  font-size: 1.8rem;
  color: var(--white);
}

.stat span {
  color: var(--muted);
  font-size: 0.86rem;
}

.hero-card {
  position: relative;
  padding: 24px;
  border-radius: 28px;
  background: linear-gradient(160deg, rgba(18, 31, 52, 0.93), rgba(12, 18, 38, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 52px rgba(0, 0, 0, 0.35);
}

.card-visual {
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(52, 211, 153, 0.18));
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 22px;
}

.mockup {
  border-radius: 18px;
  background: rgba(2, 6, 20, 0.72);
  padding: 20px;
  min-height: 420px;
}

.mockup-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot:nth-child(1) { background: #ff6b6b; }
.dot:nth-child(2) { background: #f6ba43; }
.dot:nth-child(3) { background: #34d399; }

.mockup-content {
  display: grid;
  gap: 14px;
}

.mockup-row {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 14px;
}

.large-box,
.small-box,
.tile {
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(29, 78, 216, 0.28), rgba(52, 211, 153, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 110px;
}

.tile {
  min-height: 80px;
}

.section {
  padding: 90px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 34px;
}

.section-heading h2 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 2vw + 0.8rem, 3rem);
}

.section-heading p {
  color: var(--muted);
  margin: 0;
}

.grid-3,
.grid-4 {
  display: grid;
  gap: 24px;
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card {
  background: rgba(17, 29, 47, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
  padding: 28px 22px;
  box-shadow: var(--shadow) 0 14px 28px;
}

.card-icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(29, 78, 216, 0.15), rgba(52, 211, 153, 0.08));
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 18px;
}

.card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.card p {
  margin: 0;
  color: var(--muted);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.price-card {
  position: relative;
  background: rgba(17, 29, 47, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 28px 22px;
  box-shadow: var(--shadow) 0 14px 26px;
}

.price-card.featured {
  border-color: rgba(246, 186, 67, 0.5);
  background: linear-gradient(180deg, rgba(16, 39, 66, 0.94), rgba(10, 17, 30, 0.97));
  transform: translateY(-6px);
}

.badge {
  display: inline-block;
  padding: 7px 10px;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 999px;
  background: rgba(246, 186, 67, 0.12);
  color: var(--accent);
  margin-bottom: 18px;
}

.price {
  display: flex;
  align-items: end;
  gap: 6px;
  margin: 18px 0 10px;
}

.price strong {
  font-size: clamp(2rem, 1.5vw + 1rem, 2.7rem);
}

.price span {
  color: var(--muted);
}

.pricing-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 26px;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.pricing-list li::before {
  content: "✓";
  color: var(--secondary);
  font-weight: 700;
  margin-right: 8px;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: center;
}

.about-visual {
  border-radius: 26px;
  padding: 24px;
  min-height: 420px;
  background: linear-gradient(135deg, rgba(29, 78, 216, 0.16), rgba(52, 211, 153, 0.12), rgba(246, 186, 67, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.about-panel {
  background: rgba(17, 29, 47, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 30px;
}

.about-panel p {
  color: var(--muted);
}

.inline-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  color: var(--text);
}

.inline-list li::before {
  content: "•";
  color: var(--accent);
  margin-right: 10px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 26px;
}

.info-panel, .contact-form {
  background: rgba(17, 29, 47, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 28px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  display: grid;
  gap: 16px;
  color: var(--muted);
}

.contact-list strong {
  color: var(--white);
  display: block;
  margin-bottom: 4px;
}

.form-grid {
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
}

.field label {
  color: var(--light);
  font-weight: 600;
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(7, 14, 25, 0.7);
  border-radius: 12px;
  padding: 14px 16px;
  color: var(--white);
  font-family: inherit;
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: 2px solid rgba(52, 211, 153, 0.45);
  border-color: rgba(52, 211, 153, 0.4);
}

.site-footer {
  padding: 26px 0 42px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
}

.footer-links a:hover {
  color: var(--white);
}

.page-hero {
  padding: 74px 0 10px;
}

.page-hero-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  background: rgba(17, 29, 47, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 28px 30px;
}

.page-hero-card h1 {
  margin: 10px 0 0;
  font-size: clamp(2.2rem, 2vw + 0.8rem, 3.3rem);
}

.page-hero-card p {
  margin: 0;
  color: var(--muted);
}

@media (max-width: 960px) {
  .hero-grid,
  .about-grid,
  .contact-grid,
  .page-hero-card {
    grid-template-columns: 1fr;
    display: grid;
  }

  .grid-3,
  .grid-4,
  .pricing-grid {
    grid-template-columns: 1fr 1fr;
  }

  .nav-links {
    position: absolute;
    top: 80px;
    left: 16px;
    right: 16px;
    background: rgba(8, 20, 38, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 20px;
  }

  .nav-links.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .nav-cta {
    display: none;
  }
}

@media (max-width: 640px) {
  .grid-3,
  .grid-4,
  .pricing-grid,
  .mockup-row {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 36px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .page-hero-card {
    padding: 22px 20px;
  }
}
