
import './App.css';
import { verbs } from './verbs'
import { useState } from 'react';

function Imperfectum() {
  const [count, setCount] =  useState(0);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("")
  const [answers, setAnswers] = useState(verbs[count].perfectum)
  const [page, setPage]=useState(0)
  let total = verbs.length;


  const handleClick = (e)=>{
    e.preventDefault()
    const isCorrect = answers[1] === value;
    
    if(isCorrect){
      setValue("");
      setError(false);

      if(count < total - 1){
        setCount(count + 1)
      }else{
        setCount(0)
      }
    } else{
      setError(true)
    }


    
  }

  const handleChange = (e)=>{
    const imperfectum = e.target.value.toLowerCase()
    setAnswers(verbs[count].perfectum);
    setValue(imperfectum)
  };

  const handlePage =(e) => {
    const p =Number(e.target.value) 
    setPage(p)

    
    if(p < total - 1 & p > 0){
      setCount(p  - 1)
    }
    

  }

  const handleRandom = ()=>{
    const r =Math.floor( Math.random() * 95);
    setCount(r)
  }

  return (
    <div className="App">
     
      <div className='container-card'>
        <div className="input-group flex-nowrap">
        <button className='btn btn-primary' onClick={handleRandom}>Random</button>
          <span className="input-group-text" id="addon-wrapping">Ga naar vraag: </span>
          <input type="number" className="form-control page" value={page} onChange={handlePage} placeholder="no" aria-label="no" aria-describedby="addon-wrapping" />
        </div>
        <div className="card text-center" style={{width:"26rem"}} >
            <div className="card-body" >
              <h5 className="card-title">{count+1}. {verbs[count].infinitief} - <i>{verbs[count].translation}</i></h5>
              <br />
              <form action="" onSubmit={handleClick}>
                <div className="input-group mb-3">
                  <input type="text" className={error ? "form-control input-border": "form-control" } value={value} placeholder="Perfectum"
                  aria-label="Perfectum" aria-describedby="basic-addon1" onChange={handleChange}/> 
                  
                </div>
                {error? <div>Het juiste antwoord is <b>({answers[0]})</b> <b><i>{answers[1]}</i></b> </div>:null} <br />
                <button type='subimt' className="btn btn-primary">Check</button> 
              </form>
              <br /> <br />
              <p className='info'>made by <i>info@berihu.be</i> </p>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default Imperfectum;
