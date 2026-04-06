import { useNavigate } from "react-router-dom";

function DramaCard({ drama }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/drama/${drama.id}`)}
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
    >
      <img
        src={drama.image}
        alt={drama.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{drama.title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {drama.description}
        </p>
      </div>
    </div>
  );
}

export default DramaCard;