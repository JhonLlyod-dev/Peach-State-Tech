# 🍑 Peach State Tech

> Georgia's go-to source for tech business news — spotlighting the founders, startups, and innovators shaping the state's digital economy.

---

## What It Is

Peach State Tech is a media and marketing platform dedicated to in-depth coverage of Georgia's fast-growing technology sector. From Atlanta's Midtown corridor to emerging hubs in Savannah and Augusta, we publish founder interviews, startup features, company spotlights, and industry insights that help Georgia tech companies get discovered and trusted online.

---

## Tech Stack

- **Framework** — [Next.js](https://nextjs.org/) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS with custom theme (`--color-peach: #FFB7A5`)
- **Animations** — [Rombo](https://rombo.co/) (`motion-preset-*` utilities)
- **CMS** — [Sanity](https://www.sanity.io/)
- **Fonts** — Custom via `next/font`

---

## Getting Started

### Prerequisites

- Node.js `18+`
- A Sanity project (for CMS content)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-org/peach-state-tech.git
cd peach-state-tech

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file at the root with the following:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
peach-state-tech/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home — latest articles + hero search
│   ├── about/
│   │   └── page.tsx      # About page
│   └── browse/
│       └── page.tsx      # Browse / search results
├── components/
│   ├── Card.tsx          # News article card
│   ├── Load.tsx          # Loading state
│   └── ...
├── sanity/
│   └── queries.ts        # Sanity GROQ queries
├── public/
│   └── background.jpg    # Hero background image
└── styles/
    └── globals.css       # Global CSS + Tailwind theme (--color-peach)
```

---

## Theme

The brand color is configured as a Tailwind custom color in `globals.css`:

```css
:root {
  --color-peach: #FFB7A5;
}
```

Use it anywhere with standard Tailwind utilities:

```html
<p class="text-peach">...</p>
<div class="bg-peach">...</div>
<div class="border-peach">...</div>
```

---

## Content (Sanity CMS)

Articles are managed through Sanity Studio. Each post includes:

| Field         | Type     | Description                        |
|---------------|----------|------------------------------------|
| `title`       | String   | Article headline                   |
| `description` | String   | Short summary / meta description   |
| `slug`        | Slug     | URL-friendly identifier            |
| `coverImage`  | Image    | Hero image for the card            |
| `categories`  | Array    | Tags (e.g. "Startup", "AI")        |
| `publishedAt` | Datetime | Publication date                   |

---

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/). Connect your GitHub repo and add the environment variables in the Vercel dashboard — zero config required.

---

## Contributing

This is a private project. If you're a contributor, please:

1. Branch off `main` using the format `feature/your-feature-name`
2. Open a pull request with a clear description of changes
3. Ensure `npm run lint` passes before requesting review

---

## License

Private — © Peach State Tech. All rights reserved.