import { useNavigate } from "react-router-dom"

function PageNotFound(){

    const navigate = useNavigate();
    return (
        <div className="container-center">
            <h2>Page not Found</h2>
            <button 
                className="button"
                onClick={ () => navigate('/') }
            >
                Return to Home
            </button>
        </div>
        )
}

export { PageNotFound }