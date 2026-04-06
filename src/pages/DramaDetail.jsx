import { useParams } from "react-router-dom";
import { dramas } from "../data/dramas";

function DramaDetail() {
    const {id} = useParams();
    const drama =dramas.find((d) => d.id === Number(id));
    if(!drama){
        return <h2>Drama Not Found</h2>
 }
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{drama.title}</h1>

            <img 
                src={drama.image}
                alt={drama.title}
                className ="w-full max-w-md mt-4 rounded"
            />
            <p className="mt-4 text-gray-700">{drama.description}</p>
        </div>
    );
}

export default DramaDetail;