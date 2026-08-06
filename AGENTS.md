# Agent instructions

Conventions for humans and AI assistants working in this repo. Follow this file when adding or refactoring marketing sections.

## Section layout

Every marketing section follows the same outer shell so content aligns site-wide.

### Structure

```tsx
<section className={cn("section-padding relative", className)}>
  <div className={cn("container", containerClass)}>
    <div className="flex flex-col items-center justify-center">{/* content */}</div>
  </div>
</section>
```

| Layer         | Responsibility                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `<section>`   | Vertical spacing (`section-padding`), `relative`, overflow, page overrides (`className`, `page-top-padding`) |
| Container div | Width + horizontal padding only: `cn('container', containerClass)`                                           |
| Inner div(s)  | Flex, grid, gap, columns, text alignment                                                                     |

```tsx
// ❌ BAD — layout on container
<div className={cn('container flex flex-col items-center', containerClass)}>

// ✅ GOOD
<div className={cn('container', containerClass)}>
  <div className="flex flex-col items-center justify-center">
```

### Width tokens (`globals.css`)

| `containerClass` value | Max width   |
| ---------------------- | ----------- |
| `container-small`      | `max-w-5xl` |
| `container-large`      | `max-w-6xl` |

Pages pass width into sections:

```tsx
<FeaturesBento containerClass="container-small" />
```

### Backgrounds and decorative layers

**Full-width** backgrounds — shaders, patterns, section bg images, overlay fades are generally absolutely positioned **siblings of the container**, directly on the section (before the container for underlays, after for overlays). The section must be `relative` (and usually `overflow-hidden`).

```tsx
<section className="section-padding relative overflow-hidden">
  {/* Full-width — section sibling, NOT inside container */}
  <FluxWavePattern className="absolute inset-0 opacity-20" />

  <div className={cn("relative z-10 container", containerClass)}>
    <div className="flex flex-col items-center justify-center">{/* content */}</div>
  </div>

  {/* Full-width overlay — after container, higher z-index */}
  <div className="from-background pointer-events-none absolute inset-0 z-20 bg-gradient-to-t ..." />
</section>
```

## Section headers

Most sections open with a **heading + description**. Heroes use **`h1`**; everything else uses **`h2`**.

Keep line length short — long headings and descriptions look bad at full container width. Wrap the header block in a **`div`** and apply `max-w-*` on that wrapper. If the heading and description have differing lengths, you can apply `max-w-*` to the heading and description elements directly — but the wrapper is preferred.

```tsx
{
  /* Centered */
}
<div className="mx-auto max-w-3xl space-y-3 text-center lg:space-y-4">
  <h2 className="text-4xl tracking-tight lg:text-5xl">Section title</h2>
  <p className="text-muted-foreground text-lg leading-snug">Short description.</p>
</div>;

{
  /* Left-aligned */
}
<div className="max-w-3xl space-y-3 lg:space-y-4">
  <h2 className="text-4xl tracking-tight lg:text-5xl">Section title</h2>
  <p className="text-muted-foreground text-lg leading-snug">Short description.</p>
</div>;
```

| Use                  | Class                                                              |
| -------------------- | ------------------------------------------------------------------ |
| Default header width | `max-w-3xl` or `max-w-4xl` on the wrapper                          |
| Centered header      | `mx-auto` + `text-center` on the wrapper                           |
| Left-aligned header  | omit `mx-auto` / `text-center`                                     |
| Differing lengths    | `max-w-*` on `<h2>` / `<p>` individually (wrapper still preferred) |

```tsx
// ✅ GOOD — max-w on wrapper div
<div className="mx-auto max-w-3xl space-y-3 lg:text-center lg:space-y-4">
  <h2>...</h2>
  <p>...</p>
</div>

// ✅ OK — differing lengths (e.g. wider description)
<div className="space-y-3 lg:space-y-4">
  <h2 className="max-w-3xl">...</h2>
  <p className="max-w-5xl">...</p>
</div>

// ❌ BAD — full container width, no max-w constraint
<h2 className="text-4xl">...</h2>
<p className="text-lg">...</p>
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
