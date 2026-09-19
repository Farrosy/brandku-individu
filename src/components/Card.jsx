import { featuresData } from "../data/features";

function Card({ icon, title, price }) 
{
    console.log(icon, title, price);
    return (
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <img src={icon} alt={title} className="w-100s h-100 mb-4 object-contain" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
            <div className="text-3xl font-bold">${price}</div>
        </div>
    );
}

export default Card;