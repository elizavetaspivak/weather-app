import React from 'react';
import './App.css';
import mainImage from './common/assets/image/main.jpg'
import {SearchInput} from "./components/search-input/SearchInput";

function App() {
    let mainBlock = {
        backgroundImage: `url(${mainImage})`,
        backgroundSize: 'cover'
    }

    return (
        <div className="App" style={mainBlock}>
            <div>
                <h1>Check you weather</h1>
                <SearchInput/>
            </div>
        </div>
    );
}

export default App;
