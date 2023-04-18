import Navbar from "../components/NavBar";
import Pokemon from "../pokedex/[pokemon]"

const Layout = ({ children }) => {
return (
    <>
    <Navbar /> 
    <div> 
        {children} 
    </div>
    </>
    );
    };
export default Layout;