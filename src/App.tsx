import { useState } from 'react';
import './App.css'

export default function App() {
  const [champion, setChampions] = useState('');
  const [championSearch, setChampionSearch] = useState(false);
  const imagem = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`

  function handleChampionSearch() {
    setChampionSearch(true)
  }

  function championAppears() {
    if(championSearch) {
      return <img src={imagem} alt='splashArt' /> 
    }
  }

  function handleOnChange(e: any) {
    setChampions(e.target.value)
    setChampionSearch(false)
  }

  return(
    <div id='container'>
      <div className='input-container'>
        <input id='input'  placeholder='digite o nome de um campeão' onChange={e => handleOnChange(e)}/>
        <button onClick={() => handleChampionSearch()}>
          Pesquisar
        </button>
      </div>
      <div className='splash-container'>
        {championAppears()}
      </div>
    </div>
  );
}