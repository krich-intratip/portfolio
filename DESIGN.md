---
name: Lt.Gen. Krich Intratip — Executive Portfolio
description: Executive portfolio for a strategic security, AI governance, and human development specialist
colors:
  void-navy: "#0a0e17"
  deep-surface: "#111722"
  elevated-surface: "#1a2230"
  subtle-border: "#1e2a3d"
  ink-primary: "#e2e8f0"
  ink-secondary: "#94a3b8"
  ink-muted: "#7c8ca2"
  strategic-gold: "#c9a227"
  gold-light: "#e0b540"
  defense-crimson: "#8b2020"
  crimson-light: "#a53030"
typography:
  display:
    fontFamily: "Trirong, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Trirong, Georgia, serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Sarabun, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Sarabun, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Sarabun, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.strategic-gold}"
    textColor: "{colors.void-navy}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.void-navy}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-secondary-hover:
    backgroundColor: "{colors.deep-surface}"
    textColor: "{colors.strategic-gold}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  card-default:
    backgroundColor: "{colors.deep-surface}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-hover:
    backgroundColor: "{colors.elevated-surface}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
    padding: "32px"
  chip-default:
    backgroundColor: "{colors.elevated-surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
  nav-link:
    textColor: "{colors.ink-secondary}"
    rounded: "0"
    padding: "4px 0"
  nav-link-hover:
    textColor: "{colors.strategic-gold}"
    rounded: "0"
    padding: "4px 0"
---

# Design System: Lt.Gen. Krich Intratip — Executive Portfolio

## 1. Overview

**Creative North Star: "The Strategy Map"**

This system reflects a strategist's mind: precise, structured, connecting disparate domains into a coherent picture. Every element earns its place through function, not decoration. The design feels like a well-organized briefing document that happens to be beautiful, not a beautiful page that happens to contain information.

The palette is a committed dark navy that carries 65-70% of the surface. Strategic gold appears as a deliberate accent for emphasis and interaction, never as decoration. Deep crimson surfaces only in contexts referencing defense and security. The restraint is the authority: a Lt. General does not need to shout to be heard.

Typography pairs Trirong (a Thai serif with quiet authority) for display with Sarabun (the Thai government standard sans) for body. The contrast between serif gravitas and sans clarity mirrors the brand's bridge between tradition and modernity. Both families fully support Thai and Latin script.

**Key Characteristics:**
- Committed dark navy surfaces with gold accent restraint
- Serif display + sans body pairing (Trirong + Sarabun)
- Tonal layering for depth instead of shadows
- Generous whitespace as confidence
- No gradient text, no glassmorphism, no decorative blur
- Imagery-led hero with portrait photography
- Motion is purposeful: reveals enhance content, never gate it

## Defense-Tech Atlas Direction

The selected redesign direction is **Defense-Tech Atlas** with **AI Governance Statesman** as the secondary tone. The first viewport must communicate a Thai executive strategist who connects defense, public policy, systems, people development, and responsible AI into one decision map.

Implementation rules:
- Thai leads the experience. English is used only where precise terms matter, such as Defense-Tech, AI Governance, Strategic Advisory, and Digital Transformation.
- Use the approved portrait at `public/assets/krich-2026.png`; do not introduce organization logos, seals, flags, crests, or official-looking symbols.
- Visual material may use abstract atlas lines, data topography, coordinate grids, tactical teal, strategic gold, and restrained crimson only where the content is explicitly security-related.
- Blog imagery must be newly generated photorealistic Thai-context imagery, relevant to each topic and free of logos, seals, flags, readable agency names, or fake official documents.
- The blog surface must support SEO and GEO through visible summaries, direct answers, Thai executive takeaways, FAQ, article metadata, and JSON-LD that matches visible content.

## 2. Colors: The Strategist's Palette

A disciplined palette where darkness carries authority and gold carries attention.

### Primary
- **Strategic Gold** (#c9a227): The single accent color. Used for interactive elements, key emphasis, hover states, and the primary CTA. Never used for decoration or large fills. Its rarity is its power.

### Secondary
- **Defense Crimson** (#8b2020): Reserved exclusively for security, defense, and military context elements. Appears in section accents for defense-related content, never as a general decorative color.

### Neutral
- **Void Navy** (#0a0e17): The base background. Deep, near-black with a subtle navy undertone. Carries the majority of every surface.
- **Deep Surface** (#111722): Card and section backgrounds. One step lifted from the void.
- **Elevated Surface** (#1a2230): Hover states and interactive surfaces. Two steps lifted.
- **Subtle Border** (#1e2a3d): Borders and dividers. Present but never demanding attention.
- **Ink Primary** (#e2e8f0): Primary text color. Near-white with a cool undertone that sits comfortably on void navy.
- **Ink Secondary** (#94a3b8): Secondary text, metadata, labels. Meets 4.5:1 contrast on void navy.
- **Ink Muted** (#7c8ca2): Tertiary text, placeholders, disabled states. Meets WCAG AA on Elevated Surface and darker backgrounds.

### Named Rules
**The Gold Discipline Rule.** Strategic Gold appears on no more than 10% of any given viewport. It marks interactive elements and key emphasis only. If gold decorates more than it directs, it has lost its function.

**The Crimson Context Rule.** Defense Crimson is not a general accent. It surfaces only in sections or elements explicitly tied to military, security, or defense subject matter. Using it elsewhere dilutes its meaning.

## 3. Typography

**Display Font:** Trirong (with Georgia, serif fallback)
**Body Font:** Sarabun (with system-ui, sans-serif fallback)

**Character:** Trirong brings the measured authority of a formal briefing document. Its serifs are precise without being ornate, modern without being cold. Sarabun is the workhorse of Thai government communications: clean, legible, professional. The pairing communicates that this person operates at the intersection of tradition and technology.

### Hierarchy
- **Display** (600, clamp(2rem, 5vw, 3.5rem), 1.15, -0.02em): Hero name and primary page titles. Used once or twice per page.
- **Headline** (500, clamp(1.5rem, 3.5vw, 2.25rem), 1.25): Section headings. The serif voice carries section identity.
- **Title** (600, 1.25rem, 1.4): Card titles, subsection headings. Sans for structural clarity.
- **Body** (400, 1rem, 1.7): All body copy, descriptions, paragraphs. Line-height 1.7 for Thai readability. Max line length 65-75ch.
- **Label** (500, 0.8125rem, 1.4, 0.02em): Metadata, tags, badges, small UI labels. Never all-caps body copy.

### Named Rules
**The Two Voice Rule.** Trirong speaks for sections and identity. Sarabun speaks for content and structure. Never use Trirong for body copy or Sarabun for display headings. The contrast IS the system.

**The Thai Readability Rule.** Body line-height is 1.7, not the Latin default of 1.5. Thai script with vowel marks and tone markers needs vertical breathing room. Never compress below 1.6 for Thai body text.

## 4. Elevation

This system uses tonal layering, not shadows. Depth is conveyed by stepping surface lightness: Void Navy at the base, Deep Surface for cards, Elevated Surface for interactive states. This produces a quiet, structural depth that matches the "Strategy Map" metaphor: layers of information, not floating cards.

### Shadow Vocabulary
- **Focus Glow** (`0 0 0 2px {colors.strategic-gold}`): The only shadow-like effect. Used for keyboard focus rings on interactive elements. Not decorative.
- **No drop shadows.** Cards and surfaces do not use box-shadow. Their elevation is communicated by background tone and border.

### Named Rules
**The Tonal Layering Rule.** Never use box-shadow for decorative elevation. Depth comes from background color steps (void, deep, elevated) and subtle borders. The only shadow permitted is the focus ring.

## 5. Components

### Buttons
- **Shape:** Minimal radius (6px). Not pill-shaped. Confident, not playful.
- **Primary:** Strategic Gold background, Void Navy text, 14px 32px padding, 500 weight. The gold-on-dark contrast is the strongest visual signal on the page.
- **Hover/Focus:** Gold Light background, slight tone shift. Focus ring (2px gold outline). No transform, no shadow change.
- **Secondary:** Transparent background, Ink Primary text, 1px Subtle Border border. Hover: Deep Surface background, gold text. The quiet alternative.

### Chips / Tags
- **Style:** Elevated Surface background, Ink Secondary text, 6px radius, 6px 14px padding.
- **State:** No selected/unselected variant. Chips are informational labels, not interactive filters.

### Cards / Containers
- **Corner Style:** 14px radius. Deliberate but not over-rounded.
- **Background:** Deep Surface. One step above the void.
- **Shadow Strategy:** None. See Elevation: tonal layering.
- **Border:** 1px Subtle Border. Present but quiet.
- **Hover:** Background shifts to Elevated Surface. Border may shift toward gold at 30% opacity. No scale transform, no shadow.
- **Internal Padding:** 32px standard, 24px for dense layouts.

### Inputs / Fields
- **Style:** Deep Surface background, 1px Subtle Border, 6px radius, 14px vertical padding.
- **Focus:** Border shifts to Strategic Gold, 2px. No glow, no shadow.
- **Placeholder:** Ink Muted. Verify 4.5:1 contrast.

### Navigation
- **Style:** Fixed top bar, transparent at hero, transitions to Void Navy at 90% opacity with Subtle Border bottom on scroll.
- **Logo:** "Lt.Gen. Krich Intratip, Ph.D." in Trirong, Ink Primary. No gradient.
- **Links:** Sarabun 500, Ink Secondary. Hover: Strategic Gold. Underline animation on hover (width 0 to 100%).
- **Mobile:** Full-height overlay menu, Void Navy background, large Trirong links.

## 6. Do's and Don'ts

### Do:
- **Do** use Strategic Gold for the single most important interactive element per section.
- **Do** pair Trirong for headings with Sarabun for body. The serif/sans contrast is the typographic system.
- **Do** use tonal layering (void, deep, elevated) for depth instead of shadows.
- **Do** maintain body line-height at 1.7 for Thai script readability.
- **Do** use real portrait photography in the hero and about sections.
- **Do** cap body line length at 65-75ch for reading comfort.
- **Do** include `prefers-reduced-motion` fallbacks for every animation.
- **Do** verify all text meets WCAG AA contrast (4.5:1 body, 3:1 large text).

### Don't:
- **Don't** use gradient text (`background-clip: text` with gradient). Solid colors only. This is an absolute ban from PRODUCT.md's anti-reference "tech startup portfolio."
- **Don't** use glassmorphism, decorative blur, or `.glass` classes. Tonal layering replaces it.
- **Don't** use Inter font family. It is a training-data default. Trirong + Sarabun is the committed pairing.
- **Don't** use sky-400, indigo-400, or pink-400. The old palette is retired. Void Navy + Strategic Gold is the new system.
- **Don't** use identical card grids with icon + heading + text repeated endlessly. Vary card sizes and content density.
- **Don't** place tiny uppercase tracked eyebrow text above every section heading. One named kicker as a deliberate brand system is voice; repeating it as section grammar is AI scaffolding.
- **Don't** use side-stripe borders (border-left greater than 1px as colored accent).
- **Don't** use buzzwords: empower, leverage, transform, seamless, cutting-edge, world-class. Pick a specific noun and verb.
- **Don't** use box-shadow for decorative card elevation. The only shadow permitted is the focus ring.
- **Don't** use border-radius greater than 16px on cards. 14px is the committed maximum.
