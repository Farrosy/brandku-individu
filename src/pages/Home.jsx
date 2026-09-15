import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";

function Home({features}) 
{
    return (
        <div className="text-green-500">Home

        <section>
            <Hero features={features}/>
            <CardGrid/>
        </section>
        </div>
    )
}

export default Home;