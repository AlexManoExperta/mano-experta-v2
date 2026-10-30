# Gallery photos

The "Our Work" section shows a styled placeholder tile for each trade until a real photo
with the matching filename exists in this folder. Then the photo appears automatically and
becomes clickable (opens in the lightbox). No HTML edits needed.

| File name | Tile |
|---|---|
| `cabinets-1.jpg` | Cabinet Painting |
| `stucco-2.jpg` | Stucco Parapet Repair |
| `framing-1.jpg` | Fireplace Surround Rebuild |
| `cabinets-2.jpg` | Kitchen Cabinets & Countertop |
| `drywall-2.jpg` | Sheetrock Ceiling Patch |
| `stucco-3.jpg` | Parapet Cap, Fresh Stucco |
| `drywall-1.jpg` | Ceiling Texture |
| `stucco-1.jpg` | Interior Stucco Patch |
| `drywall-3.jpg` | Textured Bedroom Ceiling |
| `plumbing-1.jpg` | Sink & Faucet Install |
| `roofing-1.jpg` | Tar & Gravel Roofing (placeholder until a photo is added) |
| `electrical-1.jpg` | Electrical (placeholder until a photo is added) |

## Tips
- Use **JPG**, landscape (4:3 works best; it's cropped to fill the tile), about **1600px wide**,
  ideally under **300 KB** (compress at https://squoosh.app).
- File names are case-sensitive on GitHub Pages: `stucco-1.jpg`, not `Stucco-1.JPG`.
- To add another tile, copy one `<li class="g-item" ...>` block in `index.html`, change
  `data-photo` (e.g. `images/gallery/drywall-2.jpg`), `data-trade` (controls the placeholder color:
  stucco, roofing, drywall, cabinets, electrical, framing, landscaping) and the label.
  For a new label, add a key (e.g. `g9`) to both `en` and `es` in `script.js`.
- To remove a tile, delete its `<li>`.
