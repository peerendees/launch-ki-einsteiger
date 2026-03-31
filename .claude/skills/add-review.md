# Skill: Bewertung hinzufügen

Füge eine neue Bewertung in `ki-einsteiger/reviews.json` ein.

## Ablauf

1. Lies `ki-einsteiger/reviews.json`
2. Ermittle die nächste freie `id` (höchste vorhandene ID + 1)
3. Frage den Nutzer nach fehlenden Angaben (falls nicht bereits übergeben):
   - **name** — Name des Bewerters (z.B. „Vorname N." oder „Vorname Nachname")
   - **job** — Beruf/Position (optional, darf leer sein)
   - **rating** — Sterne 1–5
   - **comment** — Bewertungstext
   - **date** — Datum im Format YYYY-MM-DD (Standard: heutiges Datum)
4. Füge den neuen Eintrag an den **Anfang** des `reviews`-Arrays ein (neueste Bewertung zuerst)
5. Speichere die Datei (valides JSON, 2-Space-Einrückung, Trailing Newline)

## Schema

```json
{
  "id": 3,
  "rating": 5,
  "name": "Vorname Nachname",
  "job": "Beruf",
  "comment": "Bewertungstext",
  "date": "2026-03-31"
}
```

## Regeln

- E-Mail-Adressen aus der Bewertung NICHT speichern (DSGVO)
- `id` immer fortlaufend hochzählen
- `date` immer im Format YYYY-MM-DD
- `rating` muss zwischen 1 und 5 liegen
- JSON-Syntax nach dem Speichern validieren
- Nach dem Einfügen den Nutzer fragen, ob committet und gepusht werden soll
