# 📚 KI für Einsteiger - Landingpage

Landingpage für das kostenlose Buch "KI für Einsteiger" von Marcus Kunkel.

## 🚀 Features

- ✅ **Kostenloses Buch** - Nur 9,95€ Versandkosten
- ✅ **Stripe Integration** - Sichere Zahlungsabwicklung  
- ✅ **Responsive Design** - Optimiert für alle Geräte
- ✅ **berent.ai Design** - Konsistente Markengestaltung
- ✅ **SEO optimiert** - Open Graph Tags und Meta-Daten

## 🛠 Tech Stack

- **HTML5/CSS3/JavaScript** - Pure Frontend
- **Stripe Checkout** - Zahlungsabwicklung
- **Vercel** - Hosting und Deployment
- **Cloudflare** - DNS Management

## 🎯 Deployment

1. **GitHub Repository** erstellen
2. **Vercel** mit Repository verbinden
3. **Custom Domain** `launch.berent.ai` hinzufügen
4. **Cloudflare CNAME** auf Vercel URL setzen

## 📦 Local Development

```bash
# Repository klonen
git clone https://github.com/peerendees/launch-ki-einsteiger.git
cd launch-ki-einsteiger

# Local Server starten
npm run dev
# Oder direkt:
python3 -m http.server 3000

# Preview
npm run preview
```

## 🔧 Stripe Setup

1. Stripe Publishable Key in `index.html` ersetzen
2. Backend für `/create-checkout-session` implementieren
3. Webhook für Fulfillment einrichten

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

**Farben:**
- Primary: `#80331A` (Braun)
- Secondary: `#9B4D2A` (Heller Braun)
- Accent: `#D6B366` (Gold)
- Dark: `#1A1A1A` (Dunkel)
- Light: `#F5F5F5` (Hell)

## 📧 Kontakt

Marcus Kunkel - [kontakt@berent.ai](mailto:kontakt@berent.ai)

**BERENT | Beratung + Entwicklung**  
Website: [berent.ai](https://berent.ai)
