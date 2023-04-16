import { useState } from "react"

export default function Home() {
  const [onActive, setOnActive] = useState('portfolio');

  return (
    <div className="min-h-screen bg-primary">
      <div
        className="p-3 w-fit mx-auto text-4xl font-bold text-white"
      >
        Portfolio Gabriel Yin<span className="text-green-500 text-5xl">.</span>
      </div>
      <div
        className="w-fit flex gap-2 mx-auto my-2"
      >
        <button
          className={onActive == 'portfolio' ? "bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-full transition-all" : "hover:bg-green-800 text-gray-300 font-bold py-2.5 px-6 rounded-full transition-all"}
          onClick={() => setOnActive('portfolio')}
        >
          Portfolio
        </button>
        <button
          className={onActive == 'contato' ? "bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-full transition-all" : "hover:bg-green-800 text-gray-300 font-bold py-2.5 px-6 rounded-full transition-all"}
          onClick={() => setOnActive('contato')}
        >
          Contato
        </button>
      </div >
    </div >
  )
}
