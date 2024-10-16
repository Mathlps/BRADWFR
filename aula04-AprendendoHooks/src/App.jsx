import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState('boa noite!')
  const [liked, setLike]= useState(true)
  const [idade, setIdade]= useState(0)

  function alterarMarca(e){
    setLike(e.target.checked)
  }
  function clickMouse(){
    setTexto("")
  }
  function alterarTexto(e){
    setTexto(e.target.value)
  }
  return (
    <>
      
      <h1>Hooks</h1>
      <div className="card">
        <p>
          <button onClick={()=> setIdade((idade) => idade + 1) }>Adicionar Idade { idade }</button>
        </p>
        <p>
          <label>
            <input type="checkbox" checked={liked} onChange={alterarMarca} />você {liked ? 'gostou' : 'nao gostou'} disso
          </label>
        </p>
      <p>
          <input value={texto} onChange={ alterarTexto } />
        </p>
        <p>
          você digitou: { texto }
        </p>
        <p>
          você {liked ? 'gostou' : 'nao gostou'} disso
        </p>
        <button onClick={clickMouse}>
          alterar
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
