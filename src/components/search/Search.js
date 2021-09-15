import React, { useState } from 'react';

const Search = (props) => {

    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/user/${userInput}`)
    }

    return (
        <div className="page-pesquisa">
            <h2>Digite seu usuário do GitHub</h2>
            <form onSubmit={handleSubmit}>
                <input value={userInput} onChange={e => { setUserInput(e.target.value)}} className="page-pesquisa-input" type="text" required />
                <button className="page-pesquisa-button">Buscar</button>
            </form>
        </div>
    );
}

export default Search;
