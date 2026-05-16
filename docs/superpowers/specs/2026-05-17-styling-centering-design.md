# Styling: Centering & Spacing Improvements

**Date:** 2026-05-17  
**Status:** Approved  

## Goal

Make the portfolio feel more centred and professional by narrowing the max-width, equalising margins, and improving vertical rhythm throughout. No structural changes — two-column layout is preserved.

## Layout Container (`Layout.jsx`)

- `maxWidth`: `1400px` → `1100px`
- Grid split: `45% / 55%` → `40% / 60%`
- Column gap: `120px` → `80px`
- Top padding: `180px` → `120px`
- Left column fixed position recalculated to match new widths: `width: calc(40% - 50px)`, `maxWidth: calc(1100px * 0.40 - 50px)`

## Vertical Rhythm (`RightSection.jsx`)

- Divider margin: `2rem 0` → `1.5rem 0`
- Section `paddingTop` / `paddingBottom`: current `1rem` → `2rem` each for consistent breathing room

## Left Sidebar (`LeftSection.jsx`)

- Add `marginTop` between contact block and nav section for visual separation (~`1.5rem`)

## Out of Scope

- Font changes (Space Mono stays)
- Card backgrounds or visual treatments on sections
- Mobile layout changes
