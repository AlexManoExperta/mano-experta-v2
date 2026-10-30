# Gallery photos

The "Our Work" section shows a styled placeholder tile for each trade until a real photo
with the matching filename exists in this folder. Then the photo appears automatically and
becomes clickable (opens in the lightbox). No HTML edits needed.

| File name            | Tile                      |
|----------------------|---------------------------|
| `stucco-1.jpg`       | Stucco & Parapet Repair   |
| `roofing-1.jpg`      | Tar & Gravel Roofing      |
| `drywall-1.jpg`      | Drywall & Sheetrock       |
| `cabinets-1.jpg`     | Cabinet Painting          |
| `electrical-1.jpg`   | Electrical                |
| `framing-1.jpg`      | Framing                   |
| `landscaping-1.jpg`  | Landscaping               |
| `stucco-2.jpg`       | Parapet Wall Repair       |

## Tips
- Use **JPG**, landscape (4:3 works best; it's cropped to fill the tile), about **1600px wide**,
  ideally under **300 KB** (compress at https://squoosh.app).
- File names are case-sensitive on GitHub Pages: `stucco-1.jpg`, not `Stucco-1.JPG`.
- To add another tile, copy one `<li class="g-item" ...>` block in `index.html`, change
  `data-photo` (e.g. `images/gallery/drywall-2.jpg`), `data-trade` (controls the placeholder color:
  stucco, roofing, drywall, cabinets, electrical, framing, landscaping) and the label.
  For a new label, add a key (e.g. `g9`) to both `en` and `es` in `script.js`.
- To remove a tile, delete its `<li>`.
