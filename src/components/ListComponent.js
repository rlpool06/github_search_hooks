import React from 'react';
import '../App.css'

const ListComponent = ({login, avatar_url, followers, public_repos}) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div>
                    <h1>{login}</h1>
                    <div className="avatar">
                        <img src={avatar_url} alt="avatar" width="300" height="300"/>
                    </div>
                    <p>Followers: {followers}</p>
                </div>
            </div>
        </div>
    );
}

export default ListComponent;