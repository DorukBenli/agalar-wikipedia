# Historical Events Encyclopedia

A Wikipedia-style encyclopedia for historical events built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Wikipedia-like interface design
- Detailed event pages with structured information
- JSON-based data structure for easy content management
- Responsive design
- TypeScript for type safety

## Data Structure

Each historical event contains:

- **People**: Key figures involved in the event
- **Sides**: Different parties or factions involved
- **Causes**: Reasons that led to the event
- **Event Details**: What happened, when, and where
- **Results**: Immediate outcomes
- **Effects**: Short-term and long-term impacts

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── events/[id]/
│   │   └── page.tsx       # Individual event page
│   ├── layout.tsx         # Root layout with header
│   ├── page.tsx           # Home page with event list
│   └── globals.css        # Global styles
├── data/
│   └── events.json        # Event data
├── types/
│   └── event.ts           # TypeScript interfaces
└── components/            # Reusable components (future)
```

## Adding New Events

To add a new historical event, edit [data/events.json](data/events.json) and add a new object following the schema defined in [types/event.ts](types/event.ts).

Example:
```json
{
  "id": "unique-event-id",
  "title": "Event Title",
  "summary": "Brief summary...",
  "date": "YYYY-YYYY or specific date",
  "people": [...],
  "sides": [...],
  "causes": [...],
  "event": {...},
  "results": [...],
  "effects": [...]
}
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **React 19**: Latest React features

## License

This is a sample project for educational purposes.
