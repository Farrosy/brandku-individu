import { useEffect, useState } from "react";
import Card from "../components/Card";
import { featuresData } from "../data/features";
import { getData } from "../api/getData"
import { data } from "react-router-dom";

function CardGrid({features}){

    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setDataProduct(data);
        };
        fetchData();
    }, []);

    dataProduct.map((data) => {
        console.log(data.title, 'TITLE')
    })

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                dataProduct.map((data) => {
                    return (
                        <>
                            <Card key={data.id} icon={data.image} title={data.title} price={data.price} />
                        </>
                        
                    )
                })
            }
        </div>
    )
}


export default CardGrid;