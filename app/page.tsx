import Link from "next/link";
import Image from "next/image";
import eventsData from "@/data/events.json";
import { HistoricalEvent } from "@/types/event";

const events: HistoricalEvent[] = eventsData as HistoricalEvent[];

export default function Home() {
  return (
    <div className="wiki-content">
      <h1 className="text-4xl font-bold mb-6">Tarihsel Olaylar</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Aşağıda Sabancı Üniversitesi edebi agalar grubu üyelerinin dahil olduğu/başından geçen
          önemli olayların listesi verilmektedir.
        </p>
      </div>

      <div className="wiki-section">
        <h2>Featured Events</h2>
        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.id} className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                {event.imageUrl && (
                  <div className="flex-shrink-0">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      width={192}
                      height={128}
                      className="w-48 h-32 object-cover rounded"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">
                    <Link href={`/events/${event.id}`} className="wiki-link">
                      {event.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{event.date}</p>
                  <p className="text-gray-700 mb-3">{event.summary}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600">
                      <strong>Taraflar:</strong> {event.sides.length} sides
                    </span>
                    <span className="text-gray-600">
                      <strong>Önemli Kişiler:</strong> {event.people.length}
                    </span>
                    <span className="text-gray-600">
                      <strong>Sonuçlar:</strong> {event.effects.length}
                    </span>
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wiki-section">
        <h2>Categories</h2>
        <ul className="wiki-list">
          <li><Link href="/" className="wiki-link">İdeolojik Çatışmalar</Link></li>
          <li><Link href="/" className="wiki-link">Organizasyonel Krizler</Link></li>
          <li><Link href="/" className="wiki-link">Sosyal Kavgalar</Link></li>
          <li><Link href="/" className="wiki-link">Kulüp İç Savaşları</Link></li>
          <li><Link href="/" className="wiki-link">Arkadaşlık Anlaşmazlıkları</Link></li>
        </ul>
      </div>
    </div>
  );
}
