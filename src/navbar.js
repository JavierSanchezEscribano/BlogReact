import { Link } from  'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Beatles Blog</h1>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/create">Nuevo Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;