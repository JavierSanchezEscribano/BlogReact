import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('George Harrison');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', { 
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            setIsPending(false);
            navigate('/');
        })
    }
    return(
        <div className="create">
            <h2>Añadir nuevo blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Título del blog: </label>
                <input 
                    type="text"
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Texto del blog:  </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                > 
                </textarea>
                <label>Autor del blog:  </label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}    
                >
                    <option value="George Harrison">George Harrison</option>
                    <option value="John Lennon">John Lennon</option>
                    <option value="Paul McCartney">Paul McCartney</option>
                    <option value="Ringo Starr">Ringo Starr</option>
                </select>
                {!isPending && <button>Añadir blog</button> }
                {isPending && <button disabled>Añadiendo blog</button> }


            </form>
        </div>
    );
}

export default Create;