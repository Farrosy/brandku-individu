import { useNavigate } from "react-router";
function Header()

{
    const navigate = useNavigate();
    return(
    <header className="flex justify-between bg-white shadow px-4 py-2">
        <h1>Brandku</h1>
        <div className="flex gap-5">
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/")} >Home</p>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/about")} >About</p>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/pricing")} >Pricing</p>
        </div>
    </header>
    )
}

export default Header;