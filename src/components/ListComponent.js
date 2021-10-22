import React from 'react';
import '../App.css'

const ListComponent = ({person}) => {

    console.log('user object', person);
    return (
        !person.id ? (null) : ( 
        <div className="border rounded-md py-3 px-5 shadow-lg">
            <h1 className="font-rubik text-4xl font-black italic">{person.login}</h1>
            <img src={person.avatar_url} alt='avatar' width="300" height='300' />
            <div className="mt-5">
                <p className="text-2xl font-rubik">Followers: {person.followers}</p>
                <p className="text-2xl font-rubik">Repos: {person.public_repos}</p>
            </div>
        </div>)
        
    )};

export default ListComponent;