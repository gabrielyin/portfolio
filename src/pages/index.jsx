import Image from "next/image";
import { useState } from "react"

export default function Home() {
  const [onActive, setOnActive] = useState('portfolio');

  return (
    <div className="min-h-screen bg-primary">
      <div
        className="p-3 w-fit mx-auto text-4xl font-bold text-white tracking-wide"
      >
        Portfolio Gabriel Yin<span className="text-green-500 text-5xl">.</span>
      </div>
      <div
        className="w-fit flex gap-2 mx-auto my-2"
      >
        <button
          className={onActive == 'portfolio' ? "tracking-wide bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-full transition-all" : "hover:bg-green-800 text-gray-300 font-bold py-2.5 px-6 rounded-full transition-all"}
          onClick={() => setOnActive('portfolio')}
        >
          Portfolio
        </button>
        <button
          className={onActive == 'contato' ? "tracking-wide bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-full transition-all" : "hover:bg-green-800 text-gray-300 font-bold py-2.5 px-6 rounded-full transition-all"}
          onClick={() => setOnActive('contato')}
        >
          Contato
        </button>
      </div >
      {onActive === 'portfolio' ? (
        <main className="max-w-4xl mx-auto px-4 md:px-0">
          <div
            className="bg-secondary rounded-lg overflow-hidden"
          >
            <img
              src='https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80'
            />
            <div
              className="p-2"
            >
              info
            </div>
          </div>
        </main>
      ) : (
        <>
          contato
        </>
      )}
    </div >
  )
}
