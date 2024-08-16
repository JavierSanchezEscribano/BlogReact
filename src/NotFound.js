import { Link } from "react-router-dom"

const NotFound = () =>{
    return(
        <div className='not-found'>
            <h2>Esta canción no es de Los Beatles</h2>
            <p>Te has equivocado de acorde.</p>
            <Link to='/'>Vuelve a la selección de canciones.</Link>
        </div>
    )
}
export default NotFound;