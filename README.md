# Mano Experta 2.0

Website for **Mano Experta**, Alex Rascón's handyman business: Albuquerque, Los Lunas and Santa Fe, NM.
Phone: **505-900-1392**.

Plain HTML, CSS and vanilla JavaScript. No frameworks, no build step. Hosted on GitHub Pages.

## Files

```
index.html            One-page site: hero, services, gallery, about, quote form, footer
styles.css            All styles (mobile-first)
script.js             Config, EN/ES translations, menu, gallery/lightbox, quote form
404.html              "Page not found" page (GitHub Pages uses it automatically)
favicon.svg           Logo mark / favicon
images/logo-mark.svg  Same logo mark, for reuse
images/og-image.jpg   Preview image for links shared on Facebook, texts, etc.
images/gallery/       Project photos (see images/gallery/README.md)
.nojekyll             Tells GitHub Pages to serve files as-is
```

## 1. Make the quote form send email (Formspree, free)

1. Sign up at <https://formspree.io> with the email address Alex wants quote requests sent to.
2. Create a new form. Copy its endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. Open `script.js` and paste it into the config block at the top:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
   ```
4. Commit and push. Submit a test request. Formspree asks you to confirm the first submission by email.

**Until an endpoint is set**, the form still works through fallbacks:
- If `QUOTE_EMAIL` in `script.js` is set (e.g. `'alex@example.com'`), the form opens the visitor's
  email app with the request already written out.
- If both are empty (current setting), the form shows the request text with **Text this to Alex**,
  **Call** and **Copy** buttons. On phones it opens the texting app to 505-900-1392 with the message filled in.

The form includes a hidden honeypot field (`_gotcha`) to block spam bots, plus built-in field validation.

## 2. Add real photos

Drop JPGs into `images/gallery/` using the names listed in `images/gallery/README.md`
(e.g. replace the stucco placeholder by adding `stucco-1.jpg`). They show up automatically.

## 3. Edit text / prices / translations

All visible text lives in **two places that must match**:
- `index.html`: the English text (what search engines and no-JS visitors see).
- `script.js`: the `I18N` object, with `en` and `es` versions of every string. Each element with
  `data-i18n="key"` gets its text from `I18N.en.key` / `I18N.es.key`.

To change a price or description, update the text in `index.html` **and** both `en` and `es` entries in `script.js`.
Current starting rates (only ones confirmed by Alex):
- Sheetrock crew from $200/worker (key `s1r`)
- Microwave hood installs ~$80/hr labor (key `s11r`)
Everything else shows "Free estimate".

Language: the **ES/EN** button switches language and remembers the choice. You can also link directly
to Spanish with `?lang=es` (e.g. `https://<user>.github.io/mano-experta-v2/?lang=es`).

## 4. Colors

Edit the variables at the top of `styles.css` (`--terracotta`, `--blue`, `--turquoise`, `--adobe`, ...).

## 5. Deploy to GitHub Pages

```bash
gh repo create mano-experta-v2 --public --source=. --push
gh api -X POST repos/<user>/mano-experta-v2/pages -f "source[branch]=main" -f "source[path]=/"
```
Or on github.com: **Settings → Pages → Deploy from a branch → main / (root)**.
The site will be at `https://<user>.github.io/mano-experta-v2/`.

After deploying:
- `404.html` uses absolute paths starting with `/mano-experta-v2/`. If the repo name changes
  or you add a custom domain, update those paths (use `/` for a custom domain).
- For better link previews, change `og:image` in `index.html` to the full URL,
  e.g. `https://<user>.github.io/mano-experta-v2/images/og-image.jpg`, and add `og:url` and a full `canonical` URL.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
(Opening the gallery logs a harmless 404 in the console for each photo that hasn't been added yet.)
