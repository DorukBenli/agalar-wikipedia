export interface Person {
  name: string;
  role: string;
  side?: string;
  imageUrl?: string;
  bio?: string;
}

export interface Side {
  name: string;
  leaders: string[];
  description: string;
  flagUrl?: string;
}

export interface Cause {
  title: string;
  description: string;
}

export interface EventDetails {
  date: string;
  location: string;
  description: string;
  keyMoments: string[];
}

export interface Result {
  title: string;
  description: string;
}

export interface Effect {
  category: string;
  description: string;
  impact: "short-term" | "long-term" | "both";
}

export interface HistoricalEvent {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl?: string;
  people: Person[];
  sides: Side[];
  causes: Cause[];
  event: EventDetails;
  results: Result[];
  effects: Effect[];
}
