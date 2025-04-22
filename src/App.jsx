import './App.css'
import logoPalin from './assets/Logo_Palin_e_Martins.png'
import { toPng } from 'html-to-image'
import { useRef, useState } from 'react'

const cargos = [
  "Advogado",
  "Estagiário",
  "Consultor Tributário",
  "Contador",
  "Analista Fiscal",
  "Gerente Tributário",
  "Assistente Administrativo",
  "Coordenador Jurídico",
  "Diretor Financeiro",
  "Sócio",
];

function App() {
  const divRef = useRef(null)
  const [nome, setNome] = useState('Digite seu nome')
  const [email, setEmail] = useState('Digite seu email')
  const [cargo, setCargo] = useState('Selecione um cargo')

  const exportToPng = () => {
    if (divRef.current === null) return;

    toPng(divRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'assinatura.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.error('Erro ao exportar imagem:', err)
      })
  }

  return (
    <main className='flex flex-col items-center gap-5'>
      <h1 className='text-3xl mb-4 flex justify-center'>Sign Project</h1>
      <div className='flex gap-4 flex-col'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="nome">Nome:</label>
          <input id='nome' type="text" className='border-2 p-2' placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email:</label>
          <input id='email' type="text" className='border-2 p-2' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='cargo'>Cargo:</label>
          <select id='cargo' type="text" className='border-2 p-2' value={cargo} onChange={(e) => setCargo(e.target.value)} >
            <option value="">Selecione um cargo</option>
            {cargos.map((cargo, index) => (
              <option key={index} value={cargo}>{cargo}</option>
            ))}
          </select>
        </div>
      </div>
      <div ref={divRef} className='flex h-[150px] w-[610px]'>
        <div className='bg-[#201E1F] w-full h-full p-9 flex justify-center pr-14 flex-col'>
          <div className='flex items-center justify-end'>
            <img src={logoPalin} alt="" className='w-[205px]' />
          </div>
          <div className='flex flex-col justify-end items-end'>
            <p className='text-white font-light'>{nome}</p>
            <p className='text-[#6A6869] text-xs'>{cargo}</p>
          </div>
        </div>
        <div className='bg-[#D9D6C7] w-full flex flex-col justify-center p-5 gap-2 text-xs'>
          <p>17 99707-7041   3301-2564</p>
          <p>Rua Bernardino de Campos, 3522, sl 12, Centro</p>
          <p>São José do Rio Preto/SP, CEP 15015-300</p>
          <p>{email}</p>
          <p>www.palinemartins.com.br</p>
        </div>
      </div>
      <button onClick={exportToPng} className='mt-4 p-2 bg-blue-500 text-white rounded'>
        Exportar como PNG
      </button>
    </main>
  )
}

export default App
