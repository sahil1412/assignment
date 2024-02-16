import ApiCollections from './API/test.api';
import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [list,setlist] = useState([]);
  const [name,setName] = useState("");
  const fetchList = React.useCallback(() =>{
    ApiCollections.fetchDetails()
    .then((response) => {
        console.log(response.data)
        setName(response.data.username);
        setlist(response.data.prefs)
    })
    .catch((err) => {
        console.log(err)
    })
},[])
useEffect(() => {
  fetchList()
},[fetchList]);
  return (
    <div className="App">
      <h1>{name}</h1>
      <table class="table-auto">
  <thead>
    <tr>
      <th>Game</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
  {list.map((game,id) => {
  return (
    <tr key={id}>
      <th>{game.username}</th>
      <th>{game.prefs}</th>
    </tr>
  )
})}
  </tbody>
</table>
    </div>
  );
}

export default App;
