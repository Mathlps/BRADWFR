import { useMemo, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [nomes, setNomes] = useState(
    [
      'Matheus',
      'Paulo',
      'Keila',
      'Giancoli'
    ]
  )

  const [input, setInput] = useState("")
    const [agendaStorage, setAgendaStorage] = useState([])
  useEffect(
    () => {
      const nomesStorage = localStorage.getItem('agenda')
      if (nomesStorage){
        setAgendaStorage(JSON.parse(nomesStorage))
      }

    },[]
  )

  useEffect(() => {
    localStorage.setItem('agenda', JSON.stringify(nomes));
  }, [nomes]); // Atualiza localStorage sempre que 'nomes' muda

  useEffect(
    ()=>{
      localStorage.setItem('agenda', JSON.stringify(nomes))
    }
    ,[nomes])
  function adicionar() {
    setNomes([...nomes, input]);
    setInput("")
  }

  const total = useMemo (()=> nomes.length, [nomes])

  return (
    <>
  <div>
    <div>
    Lista de Nomes: { total }
    <ul>
      {nomes.map(
        (nome) => (<li key={nome}>{nome}</li>)
      )}

    </ul>
    </div>
    <div>
        <h3>Local Storage:</h3>
        <ul>
          {nomes.length === 0 ? (
            <li>Vazio</li>
          ) : (
            nomes.map(nome => (
              <li key={nome}>{nome}</li>
            ))
          )}
        </ul>
      </div>
    <div>
      <input type="text" value={input} onChange={ (e) => setInput(e.target.value)}/>
      <button type="button" onClick={ adicionar }>Adicionar novo</button>
    </div>
  </div>
    </>
  )
}

export default App

