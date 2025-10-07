import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Nur POST-Requests erlauben
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { rating, name, email, job, comment } = req.body;

    // Validierung
    if (!rating || !name || !email || !comment) {
      return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen' });
    }

    // Sterne als Text
    const stars = '⭐'.repeat(parseInt(rating));

    // Email versenden
    const { data, error } = await resend.emails.send({
      from: 'Bewertungen <onboarding@resend.dev>', // Test-Modus
      to: 'office@berent.ai',
      subject: `Neue Buchbewertung: ${stars} von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #80331A;">Neue Bewertung für "KI für Einsteiger"</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Bewertung:</strong> ${stars} (${rating}/5)</p>
            <p><strong>Name:</strong> ${name}</p>
            ${job ? `<p><strong>Beruf:</strong> ${job}</p>` : ''}
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #D6B366; margin: 20px 0;">
            <h3 style="color: #80331A; margin-top: 0;">Kommentar:</h3>
            <p style="line-height: 1.6;">${comment}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              💡 <strong>Nächster Schritt:</strong> Füge diese Bewertung in <code>reviews.json</code> ein.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #999; font-size: 12px;">
            Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}<br>
            Von: shop.berent.ai/ki-einsteiger/bewertung/
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data.id });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Interner Serverfehler' });
  }
}

