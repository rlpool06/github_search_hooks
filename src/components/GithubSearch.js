import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ListComponent from './ListComponent';
import NavBar from './NavBar';


const GithubSearch = () => {
    const [user, setUser] = useState([]);
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
        .then(data => {
            setUser(data)
            setLoading(false)
            // console.log(data);
        })
    }

    const notify = () => toast('Chicken Butt.');

    return (
        <div className="flex-col justify-center">
            <NavBar />
            <div className="flex justify-center mt-5">
                <div className="flex justify-center text-center text-2xl flex-wrap w-1/3">
                    <p>Search for Github users by typing in the username.  Then hit the search button...that's what it's there for!</p>
                </div>
            </div>
            
            <div className='search'>
                <input
                    placeholder='Github user'
                    name='github user' 
                    type='text' 
                    onChange={handleSearch}
                    value={userInput}
                    className="input"
                />
                <button type="button" onClick={handleSubmit} className="button">Search</button>
            </div>
                    {loading ? <div><h1>...Loading</h1></div> :
                        <div className='list-container'>
                            <ListComponent person={user}/>
                        </div>
                    }
                    <div className="flex justify-center mt-5">
                        <div className="text-center border rounded-md p-3 w-52 bg-red-400">
                            <button onClick={notify}>Guess what?</button>
                            <Toaster />
                        </div>
                    </div>
        </div>

    )
}

export default GithubSearch;