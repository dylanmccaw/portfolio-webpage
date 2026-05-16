# Styling: Centering & Spacing Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Narrow and centre the two-column portfolio layout, and improve vertical rhythm for a more professional appearance.

**Architecture:** Three files need changes — `Layout.jsx` owns the grid/container dimensions, `RightSection.jsx` owns inter-section spacing, and `LeftSection.jsx` owns the sidebar internal spacing. No structural or component changes; this is purely values.

**Tech Stack:** React 18, Mantine v7, inline styles (no CSS modules or Tailwind).

---

### Task 1: Narrow the layout container and fix the grid (`Layout.jsx`)

**Files:**
- Modify: `src/components/Layout.jsx`

- [ ] **Step 1: Update the desktop grid container**

In `Layout.jsx`, find the `Box` that has `gridTemplateColumns: '45% 55%'` and update the desktop layout values:

```jsx
<Box
  style={{
    width: '100%',
    maxWidth: '1100px',        // was 1400px
    display: 'grid',
    gridTemplateColumns: '40% 60%',  // was 45% 55%
    gap: '80px',               // was `${GAP}px` (120px)
    paddingTop: '120px',       // was 180px
    paddingBottom: '20px',
    alignItems: 'start',
  }}
>
```

- [ ] **Step 2: Update the fixed left column dimensions**

Find the inner `Box` with `position: 'fixed'` and update its width calculations to match the new 40% split and 1100px max:

```jsx
<Box
  style={{
    position: 'fixed',
    top: '120px',                               // was 180px
    width: 'calc(40% - 50px)',                  // was calc(45% - 60px)
    maxWidth: 'calc((1100px * 0.40) - 50px)',   // was calc((1400px * 0.45) - 60px)
    height: 'fit-content',
    paddingRight: '40px',
  }}
>
```

- [ ] **Step 3: Remove the now-unused GAP constant**

Delete the line `const GAP = 120;` from the top of the component — it is no longer referenced.

- [ ] **Step 4: Verify visually**

Run `npm run dev` and open the browser. Confirm:
- Content is visibly narrower and centred with equal left/right margins
- Left sidebar is fixed and aligned correctly
- Right content column scrolls independently

---

### Task 2: Improve vertical rhythm in the right column (`RightSection.jsx`)

**Files:**
- Modify: `src/components/RightSection.jsx`

- [ ] **Step 1: Tighten divider margins**

Find `dividerStyle` and update the margin:

```jsx
const dividerStyle = { 
  borderTop: '2px dashed #10b981',
  opacity: 0.25,
  margin: '1.5rem 0'   // was 2rem 0
};
```

- [ ] **Step 2: Increase section padding**

Update `sectionStyle` to give each section more consistent breathing room:

```jsx
const sectionStyle = {
  paddingBottom: '2rem',   // was 1rem
  paddingTop: '2rem'       // was 1rem
};
```

- [ ] **Step 3: Verify visually**

Scroll through the right column. Confirm each section (About, Experience, Education) has even, comfortable spacing and the dashed dividers sit neatly between them.

---

### Task 3: Improve left sidebar internal spacing (`LeftSection.jsx`)

**Files:**
- Modify: `src/components/LeftSection.jsx`

- [ ] **Step 1: Add gap between contact block and nav**

Find the `<Box component="nav">` element and add a `marginTop` to visually separate it from the contact items above:

```jsx
<Box component="nav" style={{ marginTop: '1.5rem' }}>
```

- [ ] **Step 2: Verify visually**

Check the left sidebar. Confirm there is a clear visual gap between the contact links (GitHub, LinkedIn, email, location) and the section navigation links (About, Experience, Education).

---
