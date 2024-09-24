import './App.css';
import { useState } from 'react';

function App() {
  const [choisedNum, setChoisedNum] = useState("");
  const [choisedPhrase, setChoisedPhrase] = useState('');
  const [anwserFibonnaci, setAnwserFibonnaci] = useState("");
  const [anwserFindLetterA, setAnwserFindLetterA] = useState("");

  const findFibonnaciNumber =(number)=>{
    let a = 0;
    let b = 1;
    let fib = b;
    while (fib < number) {
      fib = a + b;
      a = b;
      b = fib;
    }
    if(fib ===Number(number)){
      setAnwserFibonnaci(`${number} é um numero da sequência de Fibonnaci`);
      }else{
        setAnwserFibonnaci(`${number} não é um numero da sequência de Fibonnaci`);
    }
    setChoisedNum("")
  }

  const findLettarA =(phrase)=>{
    const formatPhrase = phrase.split("");
    let count=0;
    formatPhrase.map((letter)=>{
      if(letter.toLowerCase()==="a"){
        count++
      }
    })
    if(count ===0){ 
      setAnwserFindLetterA("Não existe a letra A na frase")
      } else{
        setAnwserFindLetterA(`A letra A aparece ${count} vezes na frase`)
    }
    setChoisedPhrase('')
  }

  return (
    <div className="App">
      <header className="container">
        <div className='content'>
          <h3>Descubra se o numero está na sequencia de Fibonnaci</h3>
          <label>
            Digite um numero
          </label>
          <input type='number' onChange={(e)=>setChoisedNum(e.target.value)} value={choisedNum}/>
          <button onClick={()=>findFibonnaciNumber(choisedNum)}>
            Rodar sequencia
          </button>
          <p>{anwserFibonnaci}</p>
        </div>

        <div className='content'>
          <h3>Descubra quantos letras 'A' existe na frase</h3>
          <label>
            Digite uma frase
          </label>
          <input type='text' onChange={(e)=>setChoisedPhrase(e.target.value)} value={choisedPhrase}/>
          <button onClick={()=>findLettarA(choisedPhrase)}>
            Achar a letra
          </button>
          <p>{anwserFindLetterA}</p>
        </div>
        
      </header>
    </div>
  );
}

export default App;
