import { dramas } from "../data/dramas";
import DramaCard from "../components/DramaCard";

function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">
        K-Drama Explorer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {dramas.map((drama) => (
          <DramaCard key={drama.id} drama={drama} />
        ))}

      </div>

    </div>
  );
}

export default Home;