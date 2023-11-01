import './App.css';
import Imperfectum from './Imperfectum';
import Perfectum from './Perfectum';
import { verbs } from './verbs'
import { useState } from 'react';

function App() {
  const [nav, setNav]= useState('Imperfectum')

  return (
    <div className="App">
      <ul className="nav justify-content-center mt-5">
        <li className="nav-item">
          <button className={ nav =='Imperfectum'? "nav-link active": "nav-link"} onClick={()=> setNav('Imperfectum')}>Imperfectum</button>
        </li>
        <li className="nav-item">
          <button className={ nav =='Perfectum'? "nav-link active": "nav-link"} onClick={()=>setNav('Perfectum')}>Perfectum</button>
        </li>
      </ul>
      {nav === "Imperfectum"? <Imperfectum /> : nav === "Perfectum"? <Perfectum /> : null}
    </div>
  );
}

export default App;
