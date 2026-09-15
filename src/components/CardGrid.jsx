import Card from "../components/Card";
import { featuresData } from "../data/features";


function CardGrid()
{
    return (
        <div>
            {
                featuresData.map((data) =>{
                    return(
                        <Card key={data.id} title={data.title} icon={data.icon} subtitle={data.subtitle}/>
                    )
                })
            }
            <Card/>
        </div>
    )
}

export default CardGrid;