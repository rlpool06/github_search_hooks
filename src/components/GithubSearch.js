import React, { useState } from 'react';
import ListComponent from './ListComponent';
import NavBar from './NavBar';

const GithubSearch = () => {
    const [data, setData] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);

    const URL = `https://api.github.com/users/${userInput}`;

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        setLoading(true)
        fetch(URL)
        .then(res => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
            console.log(data);
        })
    }

    return (
        <div>
            <NavBar />
            <div className='search'>
                <input
                    placeholder='Github user'
                    name='github user' 
                    type='text' 
                    onChange={handleSearch}
                    value={userInput}
                />
                <button type="button" onClick={handleSubmit}>Search</button>
            </div>
                    {loading ? <div><h1>...Loading</h1></div> :
                        (<div className='list-container'>
                            {data.map(person => <ListComponent key={person.id} {...person}/>
                            )}
                        </div>)
                    }
        </div>

    )
}

export default GithubSearch;