# implementation-spec.md

## BLOSS Eletricidade — Technical Implementation Specification

**Status:** Approved visual implementation spec  
**Primary visual sources:** `approved-desktop.png`, `approved-mobile.png`  
**Brand source:** `Manual_Identidade_Visual_Bloss_Eletricidade.pdf`  
**Content / hierarchy source:** `Arquitetura_Site_Bloss_Eletricidade.pdf`

---

## 0. Governing Rule

The approved desktop and mobile mockups are the **SOURCE OF VISUAL TRUTH**.

This specification translates the approved compositions into implementable frontend rules. It does **not** authorize redesign, simplification, visual “improvement,” component homogenization, or layout substitution.

If implementation convenience conflicts with the approved mockup, **the mockup wins** unless a technical impossibility is documented.

### Do not

- replace the hero composition with a generic 50/50 split;
- convert all content blocks into identical cards;
- normalize intentionally different section densities;
- remove large photography to reduce page height;
- replace real photography with stock images;
- add glassmorphism, gradients, glow, neon, fake dashboards, or decorative circuitry;
- center-align sections that are visibly left-aligned in the mockup;
- introduce large whitespace not present in the mockup;
- move desktop sections solely to simplify component reuse;
- treat mobile as a simple stacked desktop layout.

---

# 1. Source Interpretation

## 1.1 Desktop reference

Reference design target: **~1440px viewport width**.

The supplied desktop mockup is a downscaled full-page reference. Measurements in this document are therefore approximate implementation targets, not literal screenshot pixels.

Approximate full rendered page height at 1440px: **~4100–4300px**.

## 1.2 Mobile reference

Reference design target: **~390px viewport width**.

The approved mobile reference is presented as a **three-panel continuation for presentation purposes**.

It must **NOT** be implemented as three columns.

Interpretation order is:

1. left panel, top → bottom;
2. center panel, top → bottom;
3. right panel, top → bottom.

Together they represent **one continuous mobile page**.

The mobile mockup is intentionally not structurally identical to desktop. Its reordering, isolated climatization block, compact trust information, vertical project sequence, and late authority/footer treatment are approved responsive decisions.

---

# 2. Global Brand / UI Tokens

## 2.1 Typography

Primary font family:

```css
font-family: "Archivo", system-ui, sans-serif;
```

Recommended weights:

- Body: `400 / 500`
- Labels / navigation: `600`
- Headings: `700 / 800`

Tracking:

- Hero / major headings: `-0.02em` to `-0.035em`
- Standard headings: `-0.015em` to `-0.025em`
- Body: `0`
- Uppercase labels: `0.05em` to `0.07em`

General visual rule:

**Bold, compact, technical, highly legible.**  
Do not make typography futuristic.

## 2.2 Color tokens

```css
--bloss-yellow: #F5B800;
--engineering-black: #111111;
--infrastructure-orange: #F47A20;
--warm-off-white: #F6F6F3;
--surface: #FFFFFF;
--text-primary: #161616;
--text-secondary: #656565;
--border: #DADAD5;
--whatsapp: #25D366;
```

The screenshot uses yellow as **signature / action**, not as a large continuous background.

## 2.3 Radius

Use restrained radii.

```text
small:   6px
medium:  8px
large:   12px maximum for major image/card surfaces
pill:    only where visibly present
```

Avoid 20–32px SaaS-style radii.

## 2.4 Borders

Default:

```css
border: 1px solid var(--border);
```

Dark surfaces may use low-contrast borders around:

- testimonial card;
- secondary CTA;
- footer separators.

## 2.5 Shadows

Minimal.

Use only subtle separation on white/off-white card surfaces if required:

```css
box-shadow: 0 4px 16px rgba(0,0,0,.04);
```

Do not use floating SaaS card shadows.

## 2.6 Buttons

Desktop target height:

```text
48–54px
```

Mobile target height:

```text
48–52px minimum
```

Primary CTA:

- yellow background;
- black text;
- WhatsApp icon when shown in approved mockup;
- compact radius ~6–8px;
- weight 600–700.

Secondary CTA:

- transparent or dark surface;
- visible border;
- no ghost opacity treatment.

Minimum touch target:

```text
44 × 44px
```

Preferred mobile CTA target:

```text
48–52px height
```

## 2.7 Icons

- line icons;
- technical / geometric;
- no 3D;
- no decorative lightning overload;
- icons should match the approved simple white/black/yellow treatment.

---

# 3. Global Layout System

## 3.1 Desktop container

Primary content container:

```text
max-width: ~1240–1280px
side padding: ~56–72px
```

At 1440px:

```text
effective content width: ~1260px
```

Full-bleed sections are allowed only where shown:

- hero;
- dark differential split;
- dark testimonials band;
- CTA image band;
- footer.

## 3.2 Mobile container

Reference width: `390px`

Default content padding:

```text
16–20px
```

Hero content uses approximately:

```text
20–24px left/right
```

Full-width photography may touch the viewport edge where shown.

## 3.3 Section spacing

Desktop:

```text
compact:  40–56px vertical
normal:   64–80px vertical
spacious: 88–104px vertical
```

Mobile:

```text
compact:  28–36px
normal:   40–52px
spacious: 56–72px
```

Do not increase spacing beyond these ranges merely for “premium feel.”

## 3.4 Main responsive breakpoints

Suggested implementation breakpoints:

```text
< 640px       mobile
640–899px     large mobile / small tablet
900–1199px    tablet / compact desktop
>= 1200px     desktop composition
```

The approved visual comparison should be done specifically at:

- **1440px desktop**
- **390px mobile**

---

# 4. Critical Fidelity Points

These are non-negotiable.

1. **Hero image remains dominant** on both desktop and mobile.
2. Mobile hero must show the worker / orange conduit photography **inside the first viewport experience**, not below a large text-only block.
3. Desktop hero must remain a single cinematic photographic field with the text anchored left and subject weighted right.
4. Yellow is an accent and CTA color — never expand it into large background regions.
5. The proof strip immediately after desktop hero stays **compact and horizontal**.
6. Mobile proof information is a vertical editorial block, not three equal cards.
7. Services use image-led cards, but the overall page must not become a universal “card grid.”
8. Desktop differential section is a **dark text block + dominant large real image**, approximately half-and-half.
9. Mobile differential section is a compact dark continuation, not a desktop split simply stacked.
10. Desktop portfolio is a horizontal 4-item editorial row.
11. Mobile portfolio is a long vertical project sequence with large photography.
12. Testimonials remain a dark premium band with a visually dominant quote card.
13. Location remains map-led and must include a dark address block.
14. FAQ remains restrained and compact.
15. Final CTA is photographic and dark, not a generic colored CTA box.
16. Desktop authority content is embedded in the broader narrative rather than inserted as a generic standalone corporate section.
17. Mobile approved design includes a separate late-page authority block; preserve it.
18. The approved mobile reference is sequential across three presentation panels — never render those panels side by side.
19. Mobile and desktop section order are **not required to be identical**.
20. Visual density must stay close to the approved mockups; no arbitrary whitespace expansion.

---

# 5. Section Specifications

---

## SECTION 01 — HEADER

### DESKTOP STRUCTURE

Overlay header integrated into the hero.

Left:
- Bloss logo.

Center/right:
- inline navigation:
  - Início
  - Serviços
  - Projetos
  - Sobre
  - Avaliações
  - Contato

Far right:
- compact yellow “Solicitar orçamento” CTA.

### MOBILE STRUCTURE

Single dark header row.

Left:
- logo.

Right:
- square yellow WhatsApp quick-action;
- hamburger icon.

Do not display desktop navigation inline.

### APPROXIMATE HEIGHT

```text
desktop: ~72–84px
mobile:  ~72–88px
```

### CONTAINER

Desktop aligned to hero container.

Mobile full width with ~16px inner padding.

### GRID

Desktop:
```text
logo / flexible nav / CTA
```

Mobile:
```text
logo / spacer / WhatsApp / menu
```

### COLUMNS

Desktop: 3 logical areas.  
Mobile: 4 inline items with flexible spacer.

### ALIGNMENT

Vertically centered.

### BACKGROUND

Desktop: transparent / extremely dark overlay over hero.  
Mobile: `#111111` or near-black solid surface.

### TYPOGRAPHY

Navigation:
```text
~13–15px desktop
600
```

### SPACING

Desktop horizontal navigation gap:
```text
~28–36px
```

Mobile icon gap:
```text
~10–12px
```

### BORDERS

None.

### RADIUS

CTA:
```text
~6–8px
```

WhatsApp mobile square:
```text
~6–8px
```

### SHADOW

None.

### CTA

Desktop: yellow text button.  
Mobile: yellow square WhatsApp shortcut.

### RESPONSIVE BEHAVIOR

At < 900px:
- hide inline navigation;
- hide desktop CTA;
- show mobile WhatsApp square + hamburger.

Mobile menu must open as a **solid opaque overlay / sheet**, not transparent.

### DENSITY

**COMPACT**

### SPECIAL DETAILS

Header is visually part of the hero. Do not create a detached white navigation bar.

### ACCEPTANCE CRITERIA

- Desktop logo aligns to hero text column.
- Header does not consume excessive hero height.
- Mobile header shows logo + yellow WhatsApp + hamburger in one line.
- No transparent mobile offcanvas background.

---

## SECTION 02 — HERO

### DESKTOP STRUCTURE

Single full-width dark photographic hero.

Photo:
- worker performing electrical infrastructure installation;
- orange conduits;
- worker concentrated toward center-right/right;
- wall texture visible;
- image extends behind the entire hero.

Text composition:
- left ~36–40%;
- label above headline;
- monumental multiline headline;
- yellow emphasis on “QUE FAZEM A DIFERENÇA”;
- body copy;
- two CTAs;
- bottom row with four service / coverage icons.

Optional approved right overlay:
- dark compact proof / authority note.

### MOBILE STRUCTURE

Purpose-built single-column photographic hero.

Key difference:
- photo is not moved below text;
- it remains the visual field of the hero;
- worker occupies top / upper-right area;
- text begins over darkened lower-left/lower portion;
- headline takes major visual dominance;
- only one primary yellow CTA is emphasized;
- four icon proof items form a 2 × 2 grid below CTA within the dark hero.

### APPROXIMATE HEIGHT

```text
desktop total hero incl. header: ~740–780px
mobile hero incl. header: ~1120–1200px
```

### CONTAINER

Desktop:
- full bleed background;
- inner content ~1240px.

Mobile:
- full width image;
- content ~20px side padding.

### GRID

Desktop:
```text
~40% content / ~60% photographic emphasis
```

Do not create a visible hard split.

Mobile:
```text
single visual field
```

### COLUMNS

Desktop:
- text anchored left;
- subject image naturally occupies right.
Mobile:
- no explicit columns.

### ALIGNMENT

Left aligned text.

### BACKGROUND

Dark photograph with controlled gradient / shadow for legibility.

Avoid artificial black rectangle behind the main hero copy unless required by crop.

### TYPOGRAPHY

Desktop label:
```text
12–14px / 600 / uppercase
```

Desktop headline:
```css
font-size: clamp(54px, 5vw, 74px);
line-height: .92–1.0;
font-weight: 800;
```

Mobile headline:
```css
font-size: clamp(42px, 12vw, 56px);
line-height: .95–1.0;
font-weight: 800;
```

Body desktop:
```text
18–20px
line-height ~1.45
```

Body mobile:
```text
17–19px
line-height ~1.45
```

### HEADLINE SCALE

**MONUMENTAL**

### SPACING

Desktop:
```text
content top after header: ~72–96px
headline→body: ~18–24px
body→CTA: ~24–30px
CTA→bottom icon rail: ~48–60px
```

Mobile:
```text
label→headline: ~14px
headline→body: ~18px
body→CTA: ~20–24px
CTA→icon grid: ~28–36px
```

### GAPS

Desktop CTA pair:
```text
~16–20px
```

Mobile icon grid:
```text
row gap ~24px
column gap ~12–20px
```

### BORDERS

None on hero.

### RADIUS

Primary CTA:
```text
~7px
```

### SHADOW

No decorative card shadow.

### IMAGE

Real worker / infrastructure photography.

### IMAGE ASPECT RATIO

Desktop:
```text
hero full bleed ~1.8:1 visual field
```

Mobile:
```text
portrait crop ~0.65–0.8:1 for the photographic field
```

### DESKTOP CROP

- worker torso / head strongly visible right of center;
- orange conduit remains a major graphic path;
- wall / construction context remains readable;
- do not crop to a generic worker portrait;
- preserve enough dark left field for copy.

### MOBILE CROP

- worker visible in upper-right / center;
- orange conduits remain visible;
- helmet visible;
- wall context visible;
- preserve dark lower-left field for headline;
- do not center-crop away the technical installation.

### CTA

Primary:
- yellow WhatsApp “Solicitar orçamento”.

Secondary desktop:
- text / outline “Ver nossos serviços”.

Mobile:
- primary is dominant;
- secondary may be omitted in first hero if absent from approved reference.

### RESPONSIVE BEHAVIOR

Do not “stack image after content.”

Instead:
- change crop;
- reduce headline scale;
- keep the image as hero background / dominant media;
- move proof icons into 2 × 2 grid.

### DENSITY

**NORMAL / HIGH IMPACT**

### SPECIAL DETAILS

The orange conduit creates a natural brand graphic path. Keep its visibility.

The hero must feel like a real worksite, not a stock trade-services landing page.

### ACCEPTANCE CRITERIA

- At 1440px, hero reads immediately as Bloss + electrical/climatization + CTA.
- Worker is visually dominant on right.
- Text block remains compact left.
- Mobile first screen includes logo, photography, headline, CTA.
- Mobile hero does not start with text on a plain black background.

---

## SECTION 03 — PROVA RÁPIDA / TRUST STRIP

### DESKTOP STRUCTURE

White / off-white horizontal strip with three columns:

1. Google rating / stars / review count.
2. Hours.
3. Nova Petrópolis + proximity / Serra Gaúcha.

Large icons / figures, narrow supporting copy.

### MOBILE STRUCTURE

Vertical editorial trust block:

1. rating row;
2. divider;
3. hours row;
4. divider;
5. location row.

Not three equal cards.

### APPROXIMATE HEIGHT

```text
desktop: ~180–210px
mobile:  ~560–650px
```

### CONTAINER

Desktop ~1240px.  
Mobile ~20px.

### GRID

Desktop:
```text
3 equal or near-equal columns
```

Mobile:
```text
1 column editorial stack
```

### ALIGNMENT

Desktop: left within each trust item.  
Mobile: icon left, text right.

### BACKGROUND

`#F6F6F3` / off-white.

### TYPOGRAPHY

Primary figures:
```text
desktop 36–46px / 800
mobile  34–40px / 800
```

Support:
```text
14–17px
```

### SPACING

Desktop:
```text
~32–48px around items
```

Mobile:
```text
~28–34px each row
```

### GAPS

Desktop columns separated by subtle vertical dividers.

Mobile rows separated by subtle horizontal lines.

### BORDERS

Use `#DADAD5` separators.

### RADIUS

None.

### SHADOW

None.

### RESPONSIVE BEHAVIOR

Switch from 3-column horizontal data strip to icon-led vertical editorial stack.

### DENSITY

**COMPACT desktop / NORMAL mobile**

### SPECIAL DETAILS

The rating line should visually prioritize `5,0` and stars.

### ACCEPTANCE CRITERIA

- Desktop trust strip stays visually shorter than services section.
- Mobile trust block does not look like three boxed cards.
- Dividers remain subtle.
- Icon scale is consistent with screenshot.

---

## SECTION 04 — SERVICES / SOLUÇÕES

### DESKTOP STRUCTURE

White section.

Top row:
- small yellow label;
- large heading left;
- compact explanatory text right.

Below:
- four image-led service cards in one row.

Cards:
1. Instalações elétricas
2. Ar-condicionado Split
3. Manutenção e reparos
4. Projetos e consultoria

### MOBILE STRUCTURE

White section.

- label;
- two/three-line headline;
- four large stacked image-led cards;
- each card uses prominent image on top;
- title + short support + circular arrow on bottom/right;
- full-width yellow “Ver todos os serviços” CTA after cards.

### APPROXIMATE HEIGHT

```text
desktop: ~520–580px
mobile:  ~1350–1500px
```

### CONTAINER

Desktop ~1240–1280px.  
Mobile ~16–20px.

### GRID

Desktop:
```text
4-column grid
```

Mobile:
```text
1 column
```

### COLUMNS

Desktop 4 equal cards.

### ALIGNMENT

Left aligned.

### BACKGROUND

Warm off-white / white.

### TYPOGRAPHY

Section heading desktop:
```text
42–52px / 800
```

Mobile:
```text
34–40px / 800
```

Card title:
```text
desktop ~17–19px / 700
mobile ~17–19px / 700
```

Card body:
```text
13–15px desktop
14–16px mobile
```

### SPACING

Section:
```text
desktop ~68–80px
mobile ~48–56px
```

### GAPS

Desktop card gap:
```text
16–22px
```

Mobile card gap:
```text
14–18px
```

### BORDERS

Cards use subtle light border.

### RADIUS

Cards:
```text
~8–10px
```

Images inherit top radius.

Arrow action:
- outlined circle.

### SHADOW

Very light or none.

### IMAGE

Each card has service-specific real image.

### IMAGE ASPECT RATIO

Desktop:
```text
~4:3 / 1.3:1
```

Mobile:
```text
~1.55:1 to 1.7:1
```

### DESKTOP CROP

- emphasize conduit / split / panel / lighting result;
- keep technical subject obvious.

### MOBILE CROP

- wider, cleaner crops;
- avoid tiny technical subjects;
- crop to a single clear focal point.

### CTA

Desktop service cards use small arrow action.  
Mobile ends with full-width yellow CTA.

### RESPONSIVE BEHAVIOR

This is more than “4 columns → stack.”

Mobile changes:
- larger photography;
- more generous card media ratio;
- stronger separation between cards;
- explicit full-width section CTA.

### DENSITY

**NORMAL desktop / NORMAL mobile**

### SPECIAL DETAILS

The cards must remain service-specific. Do not reuse a generic component with identical image crop behavior.

### ACCEPTANCE CRITERIA

- Desktop shows all four cards on one row.
- Mobile shows one complete card at a time with readable copy.
- Arrow circle aligns consistently bottom/right.
- Mobile section CTA is full width and yellow.

---

## SECTION 05 — DIFFERENTIALS / “POR QUE ESCOLHER A BLOSS”

### DESKTOP STRUCTURE

Full-width dark split section.

Left ~43–45%:
- yellow label;
- large white heading;
- 3 icon-led differentiators stacked.

Right ~55–57%:
- large real photograph of building + Bloss vehicles;
- yellow caption panel / badge over lower-right area.

### MOBILE STRUCTURE

Dark compact editorial continuation.

- yellow label;
- large heading;
- three differentiators vertically stacked;
- yellow outlined circular icons;
- no large desktop-style half-screen split inside this section.

The approved mobile authority photography is deferred to the late-page authority block.

### APPROXIMATE HEIGHT

```text
desktop: ~560–600px
mobile:  ~430–500px
```

### CONTAINER

Desktop:
- full bleed dark;
- inner content ~1240px.

Mobile:
- full width dark;
- ~20px content padding.

### GRID

Desktop:
```text
~44% text / ~56% image
```

Mobile:
```text
single editorial column
```

### ALIGNMENT

Left aligned.

### BACKGROUND

`#111111`

### TYPOGRAPHY

Desktop headline:
```text
44–54px / 800
```

Mobile:
```text
32–38px / 800
```

Differential title:
```text
16–18px / 700
```

Body:
```text
14–16px
```

### SPACING

Desktop:
```text
~72px vertical
```

Mobile:
```text
~36–44px vertical
```

### GAPS

Differential items:
```text
18–24px
```

### BORDERS

No card borders for each item.

### RADIUS

Icon rings circular.  
Desktop image no excessive radius.

### SHADOW

None.

### IMAGE

Desktop only in this section:
- building + vehicles.

### IMAGE ASPECT RATIO

Desktop:
```text
large landscape, roughly 1.45–1.6:1 within split
```

### DESKTOP CROP

- architecture visible;
- at least two branded vehicles visible;
- horizon/building lines not excessively cropped.

### MOBILE CROP

Not applicable in this specific differential block; photo is represented later in approved mobile authority section.

### CTA

No dominant CTA required inside this block.

### RESPONSIVE BEHAVIOR

Do not place image immediately underneath differentiators merely to mimic desktop stacking.

Approved mobile intentionally separates:
- differentiator content here;
- authority photography later.

### DENSITY

**NORMAL desktop / COMPACT mobile**

### SPECIAL DETAILS

Do not add 3 boxed cards around the differentiators.

### ACCEPTANCE CRITERIA

- Desktop feels like one integrated dark/photo composition.
- Mobile stays compact and text-led.
- Icon treatments remain yellow/line-based.
- No generic three-card feature row.

---

## SECTION 06 — PROJECTS / PORTFOLIO

### DESKTOP STRUCTURE

White editorial section.

Top:
- label;
- heading left;
- short support copy + “Ver mais projetos” aligned right.

Below:
- four horizontal project tiles.

Each:
- image;
- title;
- factual category / context.

### MOBILE STRUCTURE

This section is a major vertical proof sequence.

- yellow label;
- large heading;
- short support;
- 4 large vertical project cards;
- each card gets a large image and lower text area;
- circular arrow at card lower/right;
- full-width yellow “Ver mais projetos” button.

### APPROXIMATE HEIGHT

```text
desktop: ~430–470px
mobile:  ~1600–1700px
```

### CONTAINER

Desktop ~1240px.  
Mobile ~16–20px.

### GRID

Desktop:
```text
4 columns
```

Mobile:
```text
1 column
```

### ALIGNMENT

Left.

### BACKGROUND

White / warm off-white.

### TYPOGRAPHY

Desktop headline:
```text
42–50px
```

Mobile:
```text
34–40px
```

Project title:
```text
15–18px / 700
```

### SPACING

Desktop:
```text
~64–72px
```

Mobile:
```text
~48px top/bottom
```

### GAPS

Desktop:
```text
~16–20px
```

Mobile:
```text
~16–18px
```

### BORDERS

Subtle on mobile project cards.

### RADIUS

Project card:
```text
~8–10px
```

### SHADOW

Minimal.

### IMAGE

Real project images.

### IMAGE ASPECT RATIO

Desktop:
```text
~1.35–1.55:1
```

Mobile:
```text
~1.45–1.65:1
```

### DESKTOP CROP

Keep variety:
- infrastructure;
- residential climatization;
- electrical panel;
- external conduit.

### MOBILE CROP

Larger and more immersive than desktop.
Do not reuse desktop crops blindly.

### CTA

Yellow full-width mobile CTA.

### RESPONSIVE BEHAVIOR

Mobile project sequence is intentionally long.
Do not replace it with a horizontal swipe carousel unless approved separately.

### DENSITY

**NORMAL desktop / SPACIOUS mobile**

### SPECIAL DETAILS

Portfolio should feel like operational evidence, not gallery decoration.

### ACCEPTANCE CRITERIA

- Desktop shows four projects simultaneously.
- Mobile cards preserve large image presence.
- Titles remain immediately associated with their images.
- No generic masonry gallery replacing approved cards.

---

## SECTION 07 — TESTIMONIALS / AVALIAÇÕES

### DESKTOP STRUCTURE

Full-width black band.

Left ~40–45%:
- yellow label;
- large white/gray headline;
- yellow Google reviews CTA.

Right ~55–60%:
- single dominant testimonial card;
- avatar circle;
- five stars;
- quote;
- author / metadata;
- previous / next arrows;
- pagination dots.

### MOBILE STRUCTURE

Dark section.

- label;
- large multiline heading;
- gray de-emphasis line in heading;
- one large quote card;
- navigation arrows outside/below card;
- pagination dots;
- bordered “Ver todas as avaliações no Google” CTA.

### APPROXIMATE HEIGHT

```text
desktop: ~300–340px
mobile:  ~820–900px
```

### CONTAINER

Desktop ~1240px.  
Mobile ~16px.

### GRID

Desktop:
```text
~42% copy / ~58% testimonial
```

Mobile:
```text
1 column
```

### ALIGNMENT

Left.

### BACKGROUND

`#111111`

### TYPOGRAPHY

Desktop headline:
```text
40–48px / 800
```

Mobile:
```text
34–40px / 800
```

Quote:
```text
15–17px desktop
16–18px mobile
```

### SPACING

Desktop:
```text
~56–64px vertical
```

Mobile:
```text
~44–52px
```

### GAPS

Mobile card internal:
```text
~14–18px
```

### BORDERS

Testimonial card:
- dark-gray 1px border.

Secondary CTA:
- light border.

### RADIUS

Card:
```text
~8–10px
```

### SHADOW

None or extremely subtle.

### IMAGE

Avatar / initial circle only; no stock portrait.

### CTA

Desktop:
- yellow reviews CTA.

Mobile:
- outlined dark-surface CTA after carousel.

### RESPONSIVE BEHAVIOR

Desktop two-column band becomes a vertical story, but testimonial keeps its own distinct visual identity.

Do not convert into three equal quote cards.

### DENSITY

**COMPACT desktop / NORMAL mobile**

### SPECIAL DETAILS

Pagination dots:
- active dot yellow;
- inactive gray.

### ACCEPTANCE CRITERIA

- One testimonial dominates at a time.
- Heading and quote card remain visually distinct.
- Mobile does not become a generic review card stack.
- Navigation is touch-friendly.

---

## SECTION 08 — LOCATION / AREA SERVED

### DESKTOP STRUCTURE

White split section.

Left:
- yellow label;
- large “Nova Petrópolis e região” heading;
- short copy;
- dark address card.

Right:
- large map.

### MOBILE STRUCTURE

Vertical.

Order:
1. label;
2. heading;
3. short copy;
4. full-width map;
5. dark address card.

Map is larger than a small embed preview and remains a key visual proof.

### APPROXIMATE HEIGHT

```text
desktop: ~390–430px
mobile:  ~1100–1200px including approved breathing space
```

### CONTAINER

Desktop ~1240px.  
Mobile ~16–20px.

### GRID

Desktop:
```text
~38–42% info / ~58–62% map
```

Mobile:
```text
single column
```

### ALIGNMENT

Left.

### BACKGROUND

Warm off-white.

### TYPOGRAPHY

Heading desktop:
```text
42–50px
```

Mobile:
```text
34–40px
```

Address:
```text
14–16px
```

### SPACING

Desktop:
```text
~64–72px
```

Mobile:
```text
~48px top
```

### GAPS

Mobile:
```text
heading→body ~16px
body→map ~28px
map→address ~16px
```

### BORDERS

Map can use very subtle border / clipping.

### RADIUS

Map:
```text
~8–10px
```

Address card:
```text
~8px
```

### SHADOW

None.

### IMAGE

Map / map-style embed.

### IMAGE ASPECT RATIO

Desktop:
```text
wide landscape ~1.7–2.0:1
```

Mobile:
```text
~1.05–1.2:1
```

### DESKTOP CROP

Show Nova Petrópolis centrally with nearby regional references.

### MOBILE CROP

Tighter regional view, still showing nearby place names.

### CTA

“Ver no Google Maps”.

### RESPONSIVE BEHAVIOR

Desktop information/map side-by-side becomes editorial sequence:
heading → map → address.

### DENSITY

**NORMAL desktop / SPACIOUS mobile**

### SPECIAL DETAILS

Address card is dark with yellow pin icon / link accent.

### ACCEPTANCE CRITERIA

- Map is not reduced to a tiny iframe.
- Location text remains clearly associated with map.
- Mobile address card follows map.

---

## SECTION 09 — MOBILE-ONLY / MOBILE-EMPHASIZED CLIMATIZATION BLOCK

### DESKTOP STRUCTURE

No separate standalone block in approved desktop.

Its service content is represented within:
- services section;
- hero / general offering.

### MOBILE STRUCTURE

Approved mobile includes a dedicated dark photographic climatization block before FAQ.

Photo:
- technician working on HVAC / electrical equipment.

Content:
- yellow label “CLIMATIZAÇÃO”;
- large white heading;
- checklist with yellow outlined checks;
- yellow “Solicitar orçamento” CTA.

### APPROXIMATE HEIGHT

```text
desktop: not standalone
mobile:  ~600–650px
```

### CONTAINER

Full-width photograph with ~20px text inset.

### GRID

Single column overlay.

### ALIGNMENT

Left.

### BACKGROUND

Darkened real photograph.

### TYPOGRAPHY

Headline:
```text
34–40px / 800
```

Checklist:
```text
16–18px
```

### SPACING

```text
~40–48px vertical
```

### GAPS

Checklist:
```text
~14–18px
```

### BORDERS

Yellow outline check boxes.

### RADIUS

CTA ~7px.

### SHADOW

None.

### IMAGE

Technician / climatization installation.

### IMAGE ASPECT RATIO

Portrait / near-square crop.

### MOBILE CROP

Technician remains visible top/right; lower area remains dark enough for content.

### CTA

Full-width yellow CTA.

### RESPONSIVE BEHAVIOR

Do not force this as a separate desktop section unless a future approval explicitly adds it.

### DENSITY

**NORMAL**

### SPECIAL DETAILS

This is an approved example of intentional mobile recomposition.

### ACCEPTANCE CRITERIA

- Present on mobile reference.
- Not duplicated as a new standalone desktop section.
- Real technician remains visible.

---

## SECTION 10 — FAQ

### DESKTOP STRUCTURE

White section.

Top:
- yellow label;
- large heading left;
- small outlined WhatsApp CTA right.

Below:
- two-column FAQ grid;
- 3 questions per column.

### MOBILE STRUCTURE

Single column.

- label;
- large heading;
- six accordion rows;
- each row full width;
- plus icon right.

No large WhatsApp CTA required inside this mobile block if absent from approved reference.

### APPROXIMATE HEIGHT

```text
desktop: ~300–340px
mobile:  ~700–760px
```

### CONTAINER

Desktop ~1240px.  
Mobile ~16–20px.

### GRID

Desktop:
```text
2 columns
```

Mobile:
```text
1 column
```

### ALIGNMENT

Left.

### BACKGROUND

White / off-white.

### TYPOGRAPHY

Heading:
```text
desktop 42–50px
mobile 34–40px
```

FAQ:
```text
14–16px desktop
15–17px mobile
```

### SPACING

Desktop:
```text
~56–64px
```

Mobile:
```text
~44–50px
```

### GAPS

Accordion gap:
```text
~8–10px
```

### BORDERS

Each accordion:
```text
1px solid #DADAD5
```

### RADIUS

```text
~6–8px
```

### SHADOW

None.

### CTA

Desktop small outline CTA.

### RESPONSIVE BEHAVIOR

Two-column list → one-column accordion sequence.

Do not collapse spacing so far that touch targets are <44px.

### DENSITY

**COMPACT desktop / NORMAL mobile**

### SPECIAL DETAILS

Accordion rows should look like interface elements, not boxed content cards.

### ACCEPTANCE CRITERIA

- Desktop has two balanced columns.
- Mobile has one question per row.
- Plus icon aligns right and remains touch-safe.
- Rows stay visually compact.

---

## SECTION 11 — FINAL CTA

### DESKTOP STRUCTURE

Full-width dark photographic band.

Background:
- orange conduit infrastructure.

Left:
- yellow micro-label;
- large white headline;
- short support.

Right:
- yellow WhatsApp CTA;
- dark/outline secondary CTA.

### MOBILE STRUCTURE

Tall photographic section.

- image is vertically dominant;
- dark overlay;
- content sits in lower-middle / lower region;
- large multiline heading;
- short body;
- yellow WhatsApp CTA;
- outlined secondary CTA below.

### APPROXIMATE HEIGHT

```text
desktop: ~230–260px
mobile:  ~780–820px
```

### CONTAINER

Full bleed.

### GRID

Desktop:
```text
copy left / CTA group right
```

Mobile:
```text
single column
```

### ALIGNMENT

Left.

### BACKGROUND

Real conduit photo with dark overlay.

### TYPOGRAPHY

Desktop heading:
```text
34–42px
```

Mobile:
```text
34–40px
```

### SPACING

Desktop:
```text
~48–56px
```

Mobile:
```text
~44–52px
```

### GAPS

CTA mobile:
```text
~12–14px
```

### BORDERS

Secondary CTA:
- light gray / white outline.

### RADIUS

~7px.

### SHADOW

None.

### IMAGE

Orange conduit / slab infrastructure photograph.

### IMAGE ASPECT RATIO

Desktop:
- panoramic.

Mobile:
- portrait.

### DESKTOP CROP

Conduit lines remain visible behind CTA content without compromising legibility.

### MOBILE CROP

Conduit field fills full block and remains visually recognizable above the text.

### CTA

1. Falar / Solicitar orçamento pelo WhatsApp.
2. Ver nossos serviços.

### RESPONSIVE BEHAVIOR

Not a simple shorter stacked desktop CTA.
Mobile deliberately becomes an immersive photo block.

### DENSITY

**COMPACT desktop / NORMAL-HIGH mobile**

### SPECIAL DETAILS

Keep contrast strong.
Do not add a floating white card over photograph.

### ACCEPTANCE CRITERIA

- Desktop CTA band remains short.
- Mobile CTA remains visually immersive and tall.
- Both CTAs are touch-safe on mobile.

---

## SECTION 12 — AUTHORITY / ABOUT

### DESKTOP STRUCTURE

Authority is visually integrated into earlier content:
- “Por que escolher” section;
- vehicle/building photography;
- proof language.

No generic standalone corporate “about” slab should be inserted unless required by implementation structure without changing visual output.

### MOBILE STRUCTURE

Approved mobile contains a separate late-page authority block after final CTA:

- white/off-white background;
- yellow micro-label;
- large black headline;
- short yellow underline / signature;
- large building + vehicles photograph.

Approved visible copy includes “Mais de 20 anos...” in the mockup.

### APPROXIMATE HEIGHT

```text
desktop: visually integrated
mobile:  ~650–720px
```

### CONTAINER

Mobile ~16–20px text, image full container width.

### GRID

Single column.

### ALIGNMENT

Left.

### BACKGROUND

Warm off-white.

### TYPOGRAPHY

Heading:
```text
34–42px / 800
```

### SPACING

```text
~48px top
~24–30px before image
```

### GAPS

Compact.

### BORDERS

None.

### RADIUS

Image: minimal / none or ~6px depending on source crop.

### SHADOW

None.

### IMAGE

Building + branded vehicles.

### IMAGE ASPECT RATIO

Mobile:
```text
~1.2–1.4:1
```

### MOBILE CROP

Keep:
- building architecture;
- both vehicles;
- Bloss branding readable where possible.

### CTA

None required.

### RESPONSIVE BEHAVIOR

This is a mobile-approved structural separation from the desktop narrative.

### DENSITY

**NORMAL**

### SPECIAL DETAILS — CONTENT VALIDATION

This specification preserves the **visual slot and composition** shown in the approved mockup.

The exact factual copy must still respect the project content source. If “Mais de 20 anos” is not cleared for final publication, replace only the wording while preserving:

- headline block height;
- line count as closely as possible;
- typographic scale;
- image position;
- section spacing.

Do not delete or redesign the section solely due to copy validation.

### ACCEPTANCE CRITERIA

- Mobile authority block appears after final CTA.
- Large image remains present.
- It does not become a generic team/company card.

---

## SECTION 13 — FOOTER

### DESKTOP STRUCTURE

Dark footer.

Upper row:
- logo left;
- short company descriptor;
- navigation links across center/right;
- Instagram icon.

Lower row:
- copyright left;
- “Nova Petrópolis - RS” right.

### MOBILE STRUCTURE

Tall dark footer.

Order:
1. logo;
2. descriptor;
3. vertical nav list;
4. large yellow WhatsApp CTA;
5. copyright;
6. Instagram icon.

Nav items separated by subtle horizontal dividers and chevron right.

### APPROXIMATE HEIGHT

```text
desktop: ~200–220px
mobile:  ~650–720px
```

### CONTAINER

Desktop ~1240px.  
Mobile ~16–20px.

### GRID

Desktop:
```text
brand / nav / social
```

Mobile:
```text
single column
```

### ALIGNMENT

Left on mobile.
Desktop vertically balanced.

### BACKGROUND

`#111111`

### TYPOGRAPHY

Footer body:
```text
13–15px
```

Mobile nav:
```text
15–17px
```

### SPACING

Desktop:
```text
~36–48px
```

Mobile:
```text
~40–48px top/bottom
```

### GAPS

Mobile nav item height:
```text
~44–48px
```

### BORDERS

Mobile nav:
- subtle dark-gray dividers.

### RADIUS

WhatsApp CTA ~7px.

### SHADOW

None.

### CTA

Mobile:
- full-width yellow WhatsApp CTA.

Desktop:
- no oversized footer CTA unless visually required by approved design.

### RESPONSIVE BEHAVIOR

Desktop horizontal information becomes a vertical utility footer, but maintain dark premium treatment and spacing hierarchy.

### DENSITY

**COMPACT desktop / NORMAL mobile**

### ACCEPTANCE CRITERIA

- Footer starts visually separate from authority block.
- Mobile nav rows are touch-friendly.
- WhatsApp CTA is full width.
- Copyright and social icon remain visible at bottom.

---

# 6. Section Order

## Desktop approved visual order

```text
01 Header
02 Hero
03 Quick proof / trust
04 Services
05 Differentials / why Bloss
06 Projects
07 Testimonials
08 Location
09 FAQ
10 Final CTA
11 Footer
```

Authority / company proof is visually integrated primarily into the differentiator section.

## Mobile approved visual order

The mobile reference must be reconstructed from the three presentation panels in this order:

```text
01 Header
02 Hero
03 Quick proof / trust
04 Services
05 Differentials
06 Projects
07 Testimonials
08 Location
09 Climatization emphasis block
10 FAQ
11 Final CTA
12 Authority / About
13 Footer
```

This order is approved.

Do not force exact desktop order onto mobile.

---

# 7. Responsive Rules Beyond “Stacking”

## Hero

Desktop:
- wide image field;
- copy anchored left;
- subject right.

Mobile:
- portrait crop;
- subject remains visible above / behind copy;
- service icons become 2 × 2.

## Proof strip

Desktop:
- 3-column horizontal.

Mobile:
- vertical icon-led editorial list.

## Services

Desktop:
- 4 cards one row.

Mobile:
- 4 large stacked image cards + explicit full-width CTA.

## Differentials

Desktop:
- text / image split.

Mobile:
- text-only dark block in this position;
- large authority image moves later.

## Projects

Desktop:
- 4 equal horizontal project tiles.

Mobile:
- four large stacked project cards.

## Testimonials

Desktop:
- split copy / carousel.

Mobile:
- headline followed by single large card and carousel controls.

## Location

Desktop:
- info / map side-by-side.

Mobile:
- heading → map → address card.

## Climatization

Desktop:
- embedded in service system.

Mobile:
- approved dedicated photographic CTA section.

## FAQ

Desktop:
- two columns.

Mobile:
- single column.

## Final CTA

Desktop:
- short panoramic banner.

Mobile:
- immersive tall photographic block.

## Authority

Desktop:
- integrated.

Mobile:
- separate section near page end.

## Footer

Desktop:
- horizontal.

Mobile:
- long vertical nav with WhatsApp CTA.

---

# 8. Global Image Handling

## Use real assets only

The brand manual establishes real photography as the visual protagonist.

Never substitute:
- stock electrician image;
- generated worksite image;
- fake showroom;
- AI technician;
- generic HVAC stock photography.

## Image rendering

Use:

```css
object-fit: cover;
```

but define per-section `object-position`.

Never rely on a universal `50% 50%`.

Suggested implementation pattern:

```css
.heroMedia {
  object-position: 62% center;
}

@media (max-width: 639px) {
  .heroMedia {
    object-position: 58% 22%;
  }
}
```

Exact values should be tuned by screenshot comparison.

## Loading

Hero:
- `priority`
- preload / high fetch priority.

Below fold:
- lazy load;
- optimized responsive source sizes.

Do not sacrifice mockup fidelity for aggressive image compression.

---

# 9. Navigation / Interaction

## Desktop

Anchor navigation should visually map to:

- Serviços
- Projetos
- Sobre
- Avaliações
- Contato

## Mobile menu

Requirements:

- fixed overlay / sheet;
- opaque dark surface;
- `z-index` safely above all content;
- body scroll lock;
- minimum 48px nav rows;
- visible close action;
- WhatsApp action available.

## WhatsApp

Approved architecture prioritizes WhatsApp.

Use contextual prefilled messages where possible, but preserve CTA labels in the mockup.

Floating WhatsApp control:
- allowed by architecture;
- must not obscure mobile buttons, FAQ or footer;
- should be less visually dominant than the approved primary CTAs.

---

# 10. Accessibility

Visual fidelity must not reduce usability.

Minimum requirements:

- text contrast AA or better;
- touch targets >= 44px;
- keyboard-visible focus;
- semantic headings;
- buttons are `<button>` when interactive;
- links are `<a>`;
- accordion uses proper `aria-expanded`;
- carousel controls labeled;
- map link has accessible label;
- images have meaningful alt text;
- decorative icons `aria-hidden="true"`.

Do not change visible composition to achieve accessibility unless technically necessary; solve accessibility structurally.

---

# 11. Performance Constraints

The final visual must remain high fidelity while meeting production performance goals.

Recommended:

- AVIF/WebP responsive images;
- `srcset` / `sizes`;
- avoid huge image payloads;
- preload hero only;
- lazy load project/map/footer imagery;
- self-host / optimize Archivo where possible;
- avoid JS for static layout behavior;
- no unnecessary animation library;
- reserve image dimensions to avoid CLS.

The real production page should target mobile Lighthouse / PageSpeed performance >= 90 without visually simplifying the design.

---

# 12. Content Validation Flags

Visual implementation and factual approval are separate concerns.

The approved mockups visibly contain content that may require final factual confirmation, including:

- “Mais de 20 anos” as a prominent authority claim;
- published hour wording / “24 horas” interpretation;
- exact current Google review count;
- any service wording not present in final approved content source.

Implementation rule:

**Preserve the approved visual slot, dimensions and hierarchy.**

If content is changed after validation:
- keep equivalent line count where practical;
- do not remove the section;
- do not resize the section arbitrarily;
- do not alter crop or composition unless a new mockup is approved.

---

# 13. Screenshot Acceptance Workflow

Compare implementation screenshots against the approved references at:

```text
Desktop: 1440px width
Mobile: 390px width
```

Recommended comparison method:

1. capture full-page screenshot;
2. align top-left with approved reference;
3. overlay at ~50% opacity;
4. check section boundaries;
5. check hero crop;
6. check headline line breaks;
7. check image scale;
8. check dark/light section transitions;
9. check vertical density;
10. check CTA position.

Do not approve implementation based only on isolated components.

---

# 14. Acceptance Criteria — Whole Page

## Desktop

Implementation passes when:

- total page rhythm resembles approved desktop;
- hero height and crop are visually close;
- proof band is compact;
- services show four cards in one row;
- differential section is dark split with large real image;
- projects remain a four-across editorial row;
- testimonials are a dark split band;
- location map dominates right side;
- FAQ remains two-column;
- final CTA remains a short panoramic image band;
- footer remains compact and horizontal;
- no accidental SaaS aesthetic appears.

## Mobile

Implementation passes when:

- approved triptych is correctly interpreted as one continuous page;
- hero image remains visible and dominant immediately;
- trust block is editorial rather than boxed;
- service cards are large and stacked;
- differential block stays compact and dark;
- projects form a long vertical proof sequence;
- testimonial block remains dark and visually strong;
- map is large;
- climatization block exists as an independent mobile section;
- FAQ is a touch-friendly single column;
- CTA section remains immersive and photographic;
- authority image block appears after CTA;
- footer is vertical with full-width WhatsApp CTA;
- no desktop-only composition is blindly stacked.

---

# 15. Density Matrix

| Section | Desktop | Mobile |
|---|---|---|
| Header | COMPACT | COMPACT |
| Hero | NORMAL / HIGH IMPACT | NORMAL / HIGH IMPACT |
| Quick proof | COMPACT | NORMAL |
| Services | NORMAL | NORMAL |
| Differentials | NORMAL | COMPACT |
| Projects | NORMAL | SPACIOUS |
| Testimonials | COMPACT | NORMAL |
| Location | NORMAL | SPACIOUS |
| Climatization emphasis | N/A standalone | NORMAL |
| FAQ | COMPACT | NORMAL |
| Final CTA | COMPACT | NORMAL-HIGH |
| Authority | INTEGRATED | NORMAL |
| Footer | COMPACT | NORMAL |

---

# 16. Approximate Height Matrix

These are guidance ranges, not hard-coded values.

| Section | Desktop ~1440px | Mobile ~390px |
|---|---:|---:|
| Header + Hero | 740–780px | 1120–1200px |
| Quick proof | 180–210px | 560–650px |
| Services | 520–580px | 1350–1500px |
| Differentials | 560–600px | 430–500px |
| Projects | 430–470px | 1600–1700px |
| Testimonials | 300–340px | 820–900px |
| Location | 390–430px | 1100–1200px |
| Climatization | integrated | 600–650px |
| FAQ | 300–340px | 700–760px |
| Final CTA | 230–260px | 780–820px |
| Authority | integrated | 650–720px |
| Footer | 200–220px | 650–720px |

Use these only to prevent accidental whitespace inflation or excessive compression.

---

# 17. Implementation Notes for Component Architecture

Suggested components should support fidelity, not impose a generic design system.

```text
SiteHeader
HeroBloss
TrustStrip
ServicesSection
ServiceCard
DifferentialsSection
ProjectGallery
ProjectCard
TestimonialsSection
TestimonialCarousel
LocationSection
MobileClimateCTA
FaqSection
FinalCtaSection
MobileAuthoritySection
SiteFooter
WhatsAppFloating
```

Avoid creating one universal `Card` component if it forces:

- same radius;
- same padding;
- same hierarchy;
- same image ratio;
- same behavior

across services, projects, testimonial and location.

Shared primitives may exist, but compositions must remain section-specific.

---

# 18. Final Engineering Directive

The implementation should look like the approved design **before** it looks like a reusable template.

Reusability is secondary to fidelity.

The Bloss website must preserve:

- Industrial Premium direction;
- Swiss / International precision;
- photography as evidence;
- black / off-white rhythm;
- yellow signature;
- compact controlled interface;
- clear local-service conversion;
- strong mobile-specific recomposition.

**Do not redesign during development.**
