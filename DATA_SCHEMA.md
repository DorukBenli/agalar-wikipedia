# Event Data Schema

This document explains the JSON structure for historical events.

## Complete Schema

```typescript
interface HistoricalEvent {
  id: string;                    // Unique identifier (e.g., "world-war-1")
  title: string;                 // Event title
  summary: string;               // Brief overview
  date: string;                  // Date or date range
  imageUrl?: string;             // Optional main image
  people: Person[];              // Key figures
  sides: Side[];                 // Parties involved
  causes: Cause[];               // Reasons for the event
  event: EventDetails;           // What happened
  results: Result[];             // Immediate outcomes
  effects: Effect[];             // Long-term impacts
}
```

## Field Details

### People
```typescript
interface Person {
  name: string;          // Full name
  role: string;          // Their role in the event
  side?: string;         // Which side they were on
  imageUrl?: string;     // Optional portrait
  bio?: string;          // Brief biography
}
```

### Sides
```typescript
interface Side {
  name: string;          // Name of the faction/country
  leaders: string[];     // Array of leader names
  description: string;   // Description of the side
  flagUrl?: string;      // Optional flag image
}
```

### Causes
```typescript
interface Cause {
  title: string;         // Cause title
  description: string;   // Detailed explanation
}
```

### Event Details
```typescript
interface EventDetails {
  date: string;          // Specific date range
  location: string;      // Where it took place
  description: string;   // What happened
  keyMoments: string[];  // Important moments/timeline
}
```

### Results
```typescript
interface Result {
  title: string;         // Result title
  description: string;   // Detailed outcome
}
```

### Effects
```typescript
interface Effect {
  category: string;                           // Type (Political, Economic, etc.)
  description: string;                        // Impact description
  impact: "short-term" | "long-term" | "both"; // Duration of impact
}
```

## Example Entry

See [data/events.json](data/events.json) for complete examples like World War I, Battle of Gallipoli, and the French Revolution.

## Adding New Events

1. Open [data/events.json](data/events.json)
2. Add a new object to the array
3. Fill in all required fields
4. The event will automatically appear on the site
5. Access it at `/events/[your-id]`

## Tips

- Use descriptive IDs (e.g., "american-revolution" not "event1")
- Keep summaries under 300 characters for the listing page
- Include 3-5 key people minimum
- Document at least 2-3 causes
- List both short-term and long-term effects
- Use chronological order in keyMoments array
