import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Card from './components/card/card';

function App() {
  const [values, SetValues] = useState();
  const [listGames, setListGames] = useState();
  console.log(listGames);

  const handleChangeValues = (value) =>{
  SetValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
};

const handleClickButton = () => {
  Axios.post("http://localhost:3000/register", {
  gameid: values.gamesid,
  name: values.name,
  cost: values.cost, 
  category: values.category,
}).then((response)=> {
  console.log(response);
});
};

useEffect(()=>{
  Axios.get("http://localhost:3000/getCard").then((response)=> {
     setListGames(response.data);
  })
}, [])

  return (
    <div className="App--container">
      <div className="register--container">
      <h1 className= "register--title">Cursos Mind</h1>
      <input
          type="text"
          name="cost"
          placeholder="preço"
          className='register--input'
          onChange={handleChangeValues}
        />
      <input
          type="text"
          name="category"
          placeholder="categoria"
          className='register--input'
          onChange={handleChangeValues}
        />
       <input
          type="text"
          name="name"
          placeholder="nome"
          className='register--input'
          onChange={handleChangeValues}
        />
        <button 
        className='register--button' 
        onClick={() => handleClickButton()}
        >
          Cadastrar
        </button>
      </div>
      { typeof listGames !== "undefined" && listGames.map((value) => {
        return (
        <Card 
        key={value.id} 
        listCard={listGames} 
        setListCard={setListGames}
        id={value.id}
        name={value.name}
        cost={value.cost}
        category={value.category}
        ></Card>
        );
      })}
    </div>
  );
}

export default App;

