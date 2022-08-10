import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css'

const App = () => {

const [monsters, setMonsters] = useState([]);
const [searchField, setSearchField] = useState('');
const [filteredMonsters, setFilteredMonsters] = useState(monsters);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
}, []);

useEffect(()=>{
    setFilteredMonsters(monsters.filter((monster)=> monster.name.toLocaleLowerCase().includes(searchField)))
}, [searchField, monsters])

const onSearchChange = (event)=> setSearchField(event.target.value.toLocaleLowerCase());

    return( 
    <div className="App">
    <h2 className="app-title">Monsters Rolodex</h2>
    <SearchBox onSearchChangeHandler = {onSearchChange} 
        className = 'search-box'
        placeHolder = 'search monster'/>
    <CardList monsters = {filteredMonsters}/>
    </div>)
}

export default App;
