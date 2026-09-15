import { featuresData } from "../data/features";

function Card({icon, title, subtitle})
{
    console.log(icon, title, subtitle);
    return (
        <div>
            <span>{icon}</span>
            <span>{title}</span>
            <span>{subtitle}</span>
        </div>
    )
}

export default Card;