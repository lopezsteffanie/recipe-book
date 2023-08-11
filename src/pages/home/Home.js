import { useFetch } from '../../hooks/useFetch';
import './Home.css'

function Home() {
    const { data, isPending, error } = useFetch('http://localhost:8000/recipes');
    
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && data.map(recipe => (
                <h2 key={recipe.key}>{recipe.title}</h2>
            ))}
        </div>
    )
}

export default Home;