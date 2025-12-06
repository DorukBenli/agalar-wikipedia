import { notFound } from "next/navigation";
import Link from "next/link";
import eventsData from "@/data/events.json";
import { HistoricalEvent } from "@/types/event";

const events = eventsData as HistoricalEvent[];
const basePath = process.env.NODE_ENV === 'production' ? '/agalar-wikipedia' : '';

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="wiki-content">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

      {/* Infobox */}
      <div className="wiki-infobox">
        <div className="bg-gray-200 p-2 text-center font-bold border-b border-gray-400">
          {event.title}
        </div>
        {event.imageUrl && (
          <div className="p-2 border-b border-gray-300">
            <img src={`${basePath}${event.imageUrl}`} alt={event.title} className="w-full" />
          </div>
        )}
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold bg-gray-100">Tarih</td>
              <td className="p-2">{event.date}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold bg-gray-100">Lokasyon</td>
              <td className="p-2">{event.event.location}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold bg-gray-100">Sonuçlar</td>
              <td className="p-2">
                {event.results.map((result, idx) => (
                  <div key={idx}>{result.title}</div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <p className="text-lg leading-relaxed mb-6">{event.summary}</p>

      {/* Key People */}
      {event.people.length > 0 && (
        <div className="wiki-section">
          <h2>Önemli Kişiler</h2>
          <div className="grid gap-4">
            {event.people.map((person, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Rolü:</strong> {person.role}
                </p>
                {person.side && (
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Taraf:</strong> {person.side}
                  </p>
                )}
                {person.bio && <p className="text-gray-700">{person.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sides/Belligerents */}
      {event.sides.length > 0 && (
        <div className="wiki-section">
          <h2>Taraflar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {event.sides.map((side, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-300 rounded p-4">
                <h3 className="font-bold text-lg mb-2">{side.name}</h3>
                <p className="text-gray-700 mb-3">{side.description}</p>
                <div>
                  <p className="font-semibold mb-1">Liderler:</p>
                  <ul className="wiki-list">
                    {side.leaders.map((leader, lidx) => (
                      <li key={lidx}>{leader}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Causes */}
      {event.causes.length > 0 && (
        <div className="wiki-section">
          <h2>Nedenler</h2>
          {event.causes.map((cause, idx) => (
            <div key={idx} className="mb-4">
              <h3>{cause.title}</h3>
              <p className="text-gray-700">{cause.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* The Event */}
      <div className="wiki-section">
        <h2>The Event</h2>
        <p className="text-gray-700 mb-4">{event.event.description}</p>

        {event.event.keyMoments.length > 0 && (
          <div>
            <h3>Önemli anlar</h3>
            <ul className="wiki-list">
              {event.event.keyMoments.map((moment, idx) => (
                <li key={idx}>{moment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Results */}
      {event.results.length > 0 && (
        <div className="wiki-section">
          <h2>Sonuçlar</h2>
          {event.results.map((result, idx) => (
            <div key={idx} className="mb-4">
              <h3>{result.title}</h3>
              <p className="text-gray-700">{result.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Effects */}
      {event.effects.length > 0 && (
        <div className="wiki-section">
          <h2>Etkiler ve Önemi</h2>
          <div className="space-y-4">
            {event.effects.map((effect, idx) => (
              <div key={idx} className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{effect.category}</h3>
                  <span className={`badge badge-${effect.impact}`}>
                    {effect.impact}
                  </span>
                </div>
                <p className="text-gray-700">{effect.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 pt-4 border-t border-gray-300">
        <Link href="/" className="wiki-link">
          ← olaylara dön
        </Link>
      </div>
    </div>
  );
}
