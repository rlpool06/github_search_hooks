import React, { useState, useEffect, Fragment } from 'react';
import ListComponent from './ListComponent';
import NavBar from './NavBar';

function GithubSearch () {
    const [repos, setRepos] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [apiMsg, setApiMsg] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        document.title = 'Github Search App';
        });

        const handleSearch = (e) => {
            setUserInput(e.target.value)
        }

        const handleInput = (e) => {
            setLoading({loading:true})
            fetch(`https://api.github.com/users/${userInput}/repos`)
                .then(res => res.json())
                .then(data => {
                    setLoading({loading:false})
                    console.log('data', data)
                })
                if(!repos.length) {
                    setApiMsg(apiMsg= 'This user has no repos')
                } else {
                    setRepos(repos)
                    // setUserInput(userInput),
                    setApiMsg(apiMsg= null)
                }
                
        }

        // const content = repos.map(repo => !repo.fork && <ListComponent key={repo.id} {...repo} />)

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
                <button onClick={handleInput}>Search</button>
            </div>

            {
                <Fragment>
                    {/* {loading ? <div><h2>...Loading</h2></div> : 
                        apiMsg ? <div><h2>{apiMsg}</h2></div> :
                        (<div className='list-container'>
                            {content}                        
                        </div>)
                    } */}

                    {loading ? <div><h2>...Loading</h2></div> :
                        <div className='list-container'>
                            <ListComponent />
                        </div>}
                </Fragment>
            }
        </div>

    )
}

export default GithubSearch;