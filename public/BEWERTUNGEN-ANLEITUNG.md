# Anleitung: Bewertungen verwalten

## 📋 Übersicht

Das Bewertungssystem besteht aus drei Teilen:
1. **Bewertungsformular** (`ki-einsteiger/bewertung/index.html`) - Hier geben Leser ihre Bewertung ab
2. **JSON-Datei** (`ki-einsteiger/reviews.json`) - Hier werden alle Bewertungen gespeichert
3. **Anzeige** - Bewertungen werden automatisch auf Shop- und Produktseite angezeigt

## 🔗 Wichtige Links

- **Bewertungsseite:** `https://shop.berent.ai/ki-einsteiger/bewertung/`
- **QR-Code:** Erstelle einen QR-Code, der auf diese URL verweist und füge ihn ins Buch ein

## 📧 Bewertungen empfangen

### Setup Formspree (Empfohlen)

1. Gehe zu [formspree.io](https://formspree.io) und erstelle ein kostenloses Konto
2. Erstelle ein neues Formular
3. Kopiere die Form-ID (z.B. `mabcdefg`)
4. Öffne `ki-einsteiger/bewertung/index.html`
5. Suche nach Zeile mit `'https://formspree.io/f/YOUR_FORM_ID'`
6. Ersetze `YOUR_FORM_ID` mit Deiner echten Form-ID
7. Speichern und hochladen

**Jetzt erhältst Du alle Bewertungen per Email!**

### Alternative: Direktes Kontaktformular

Falls Du kein Formspree nutzen möchtest, können Leser Dir auch direkt eine Email schreiben.
Du trägst die Bewertungen dann manuell ein (siehe unten).

## ➕ Neue Bewertung hinzufügen

### Schritt 1: JSON-Datei öffnen

Öffne die Datei: `ki-einsteiger/reviews.json`

### Schritt 2: Bewertung hinzufügen

Die Datei sieht so aus:

```json
{
  "reviews": [
    {
      "id": 1,
      "rating": 5,
      "name": "Marcus K.",
      "job": "Unternehmer",
      "comment": "Tolles Buch!",
      "date": "2025-01-15"
    }
  ]
}
```

**So fügst Du eine neue Bewertung hinzu:**

1. Kopiere einen kompletten Block von `{` bis `}`
2. Füge ein Komma `,` nach der letzten Bewertung ein
3. Füge die neue Bewertung ein
4. Passe die Werte an

**Beispiel mit zwei Bewertungen:**

```json
{
  "reviews": [
    {
      "id": 1,
      "rating": 5,
      "name": "Marcus K.",
      "job": "Unternehmer",
      "comment": "Tolles Buch!",
      "date": "2025-01-15"
    },
    {
      "id": 2,
      "rating": 4,
      "name": "Anna Schmidt",
      "job": "Lehrerin",
      "comment": "Sehr verständlich erklärt, perfekt für Einsteiger!",
      "date": "2025-01-20"
    }
  ]
}
```

### Schritt 3: Felder ausfüllen

- **id**: Fortlaufende Nummer (1, 2, 3, 4...)
- **rating**: Sterne von 1-5
- **name**: Name des Bewerters (z.B. "Vorname N." oder "Vorname Nachname")
- **job**: Beruf/Position (optional, kann leer bleiben: `"job": ""`)
- **comment**: Der Bewertungstext
- **date**: Datum im Format YYYY-MM-DD (z.B. "2025-01-20")

### Schritt 4: Speichern und hochladen

1. Speichere die `reviews.json` Datei
2. Lade sie auf den Server hoch (ersetzt die alte Datei)
3. Fertig! Die Bewertung erscheint automatisch auf der Website

## ✅ Checkliste: Neue Bewertung hinzufügen

- [ ] Bewertungs-Email erhalten
- [ ] `reviews.json` öffnen
- [ ] Neue Bewertung hinzufügen (mit Komma nach vorheriger!)
- [ ] `id` hochzählen
- [ ] Alle Felder korrekt ausgefüllt
- [ ] JSON-Syntax prüfen (keine fehlenden Kommas/Klammern)
- [ ] Datei speichern
- [ ] Auf Server hochladen
- [ ] Website checken, ob Bewertung angezeigt wird

## ⚠️ Häufige Fehler

### 1. Fehlendes Komma
❌ **Falsch:**
```json
{
  "reviews": [
    { "id": 1, ... }
    { "id": 2, ... }
  ]
}
```

✅ **Richtig:**
```json
{
  "reviews": [
    { "id": 1, ... },
    { "id": 2, ... }
  ]
}
```

### 2. Doppelte IDs
Jede Bewertung braucht eine einzigartige ID. Zähle einfach hoch: 1, 2, 3, 4...

### 3. Falsches Datumsformat
❌ Falsch: `"date": "20.01.2025"`
✅ Richtig: `"date": "2025-01-20"`

## 🎨 Anzeige auf der Website

### Shop-Seite
- Zeigt durchschnittliche Bewertung + Anzahl
- Wird automatisch beim Laden berechnet

### Produktseite (ki-einsteiger/)
- Zeigt alle einzelnen Bewertungen
- Mit Sternen, Name, Beruf, Kommentar und Datum
- Button "Jetzt bewerten" führt zum Formular

## 📱 QR-Code für das Buch

**Erstelle einen QR-Code mit dieser URL:**
```
https://shop.berent.ai/ki-einsteiger/bewertung/
```

**Empfohlene Tools:**
- [qr-code-generator.com](https://www.qr-code-generator.com/)
- [qrcode-monkey.com](https://www.qrcode-monkey.com/)

**Im Buch:**
- "Bewerte dieses Buch" Seite
- QR-Code prominent platzieren
- Text: "Scanne den Code und teile Deine Meinung!"

## 🔄 Workflow-Zusammenfassung

1. **Leser scannt QR-Code** → Landet auf Bewertungsformular
2. **Leser füllt Formular aus** → Du erhältst Email
3. **Du prüfst Bewertung** → Qualitätskontrolle
4. **Du fügst in JSON ein** → Manuell hinzufügen
5. **Du lädst JSON hoch** → Upload auf Server
6. **Bewertung erscheint** → Automatisch auf Website sichtbar

## 💡 Tipps

- **Sammle 5-10 Bewertungen vor dem offiziellen Launch** für mehr Social Proof
- **Antworte auf gute Bewertungen** (per Email bedanken)
- **Nutze die besten Zitate** auch für Marketing-Material
- **Aktualisiere regelmäßig** (wöchentlich neue Bewertungen hinzufügen)

## 🆘 Support

Bei Problemen oder Fragen:
- Prüfe die Browser-Konsole (F12) auf Fehler
- Teste die JSON-Datei mit [jsonlint.com](https://jsonlint.com/)
- Kontaktiere mich bei technischen Problemen

---

**Viel Erfolg mit den Bewertungen! 🌟**

