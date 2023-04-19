import Link from "next/link";
import { useState } from "react";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineLink } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiSupabase } from 'react-icons/si';
import loginImage from '../assets/pagina-de-login.png';
import todoListImage from '../assets/todo-list.png';
import imobiliariaImage from '../assets/imobiliaria.png';
import maquinareImage from '../assets/maquinareImage.png';
import Image from "next/image";

export
  default function Home() {
  const [onActive, setOnActive] = useState('portfolio');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function sendMessage(ev) {
    ev.preventDefault();
    if (!name || !message) {
      alert('Alguns dados estão faltando')
    } else {
      const encodedName = encodeURI(name);
      const encodedMessage = encodeURI(message);
      window.open(`https://api.whatsapp.com/send?phone=5521983728281&text=(${encodedName})%20${encodedMessage}`, '_blank', 'noreferrer')
      setMessage('');
      setName('');
    }
  }

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
          Conversar
        </button>
      </div >
      {onActive === 'portfolio' ? (
        <main className="max-w-4xl mx-auto px-4 md:px-0 py-10 flex flex-col gap-4">
          <div
            className="bg-secondary rounded-lg overflow-hidden min-h-[600px] md:min-h-[300px] flex flex-col md:flex-row cursor-pointer"
          >
            <div
              className="h-[300px] md:w-2/5"
            >
              <Image
                alt='maquinare'
                src={maquinareImage}
                className="object-cover h-full w-full"
              />
            </div>
            <div
              className="p-4 grow flex flex-col justify-between md:w-3/5"
            >
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-button">Marketplace de locação</h2>
                <p className="text-white">
                  Nesse projeto o objetivo foi construir marketplace de locação de máquinas e equipamentos de construção civil. O Supabase é um Backend as a service que foi utilizado nesse projeto que possui as próprias APIs. Essa aplicação não possui um backend pois conta com a ajuda do Supabase (BaaS).
                </p>
              </div>
              <div className="flex text-white justify-between text-3xl">
                <div>
                  <h2 className="text-lg mb-1">
                    Tecnologias
                  </h2>
                  <div className="flex gap-2 ">
                    <Link target="_blank" href='https://react.dev/'>
                      <FaReact />
                    </Link>
                    <Link target="_blank" href='https://tailwindcss.com/'>
                      <SiTailwindcss />
                    </Link>
                    <Link target="_blank" href="https://supabase.com/">
                      <SiSupabase />
                    </Link>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <Link target="_blank" href='https://www.maquinare.com.br/'>
                    <AiOutlineLink />
                  </Link>
                  <Link target="_blank" href='https://www.instagram.com/yinovar/'>
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-secondary rounded-lg overflow-hidden min-h-[600px] md:min-h-[300px] flex flex-col md:flex-row cursor-pointer"
          >
            <div
              className="h-[300px] md:w-2/5"
            >
              <Image
                alt='imobiliaria'
                src={imobiliariaImage}
                className="object-cover h-full w-full"
              />
            </div>
            <div
              className="p-4 grow flex flex-col justify-between md:w-3/5"
            >
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-button">Site para imobiliária</h2>
                <p className="text-white">
                  Nesse projeto o objetivo foi construir um site que pode ser utilizado por uma imobiliária. Os dados utilizados nesse projeto foram mockados mas podem ser dinâmicos
                </p>
              </div>
              <div className="flex text-white justify-between text-3xl">
                <div>
                  <h2 className="text-lg mb-1">
                    Tecnologias
                  </h2>
                  <div className="flex gap-2 ">
                    <Link target="_blank" href='https://react.dev/'>
                      <FaReact />
                    </Link>
                    <Link target="_blank" href='https://tailwindcss.com/'>
                      <SiTailwindcss />
                    </Link>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <Link target="_blank" href='https://real-estate-website-phi.vercel.app/'>
                    <AiOutlineLink />
                  </Link>
                  <Link target="_blank" href='https://www.instagram.com/yinovar/'>
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-secondary rounded-lg overflow-hidden min-h-[600px] md:min-h-[300px] flex flex-col md:flex-row cursor-pointer"
          >
            <div
              className="h-[300px] md:w-2/5"
            >
              <Image
                alt='login image'
                src={loginImage}
                className="object-cover h-full w-full"
              />
            </div>
            <div
              className="p-4 grow flex flex-col justify-between md:w-3/5"
            >
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-button">Página de Login</h2>
                <p className="text-white">
                  Nesse projeto o objetivo foi construir uma página de login e de criar conta para autenticar o usuário que é utilizado em várias aplicações web.
                </p>
              </div>
              <div className="flex text-white justify-between text-3xl">
                <div>
                  <h2 className="text-lg mb-1">
                    Tecnologias
                  </h2>
                  <div className="flex gap-2 ">
                    <Link target="_blank" href='https://react.dev/'>
                      <FaReact />
                    </Link>
                    <Link target="_blank" href='https://tailwindcss.com/'>
                      <SiTailwindcss />
                    </Link>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <Link target="_blank" href='https://youtu.be/UH2Yh1gcp5g'>
                    <AiOutlineYoutube />
                  </Link>
                  <Link target="_blank" href='https://www.instagram.com/yinovar/'>
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-secondary rounded-lg overflow-hidden min-h-[600px] md:min-h-[300px] flex flex-col md:flex-row"
          >
            <div
              className="h-[300px] md:w-2/5"
            >
              <Image
                alt='todolistimage'
                src={todoListImage}
                className="object-cover h-full w-full"
              />
            </div>
            <div
              className="p-4 grow flex flex-col justify-between md:w-3/5"
            >
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-button">Todo List App</h2>
                <p className="text-white">
                  Nesse projeto o objetivo foi criar um todo list app onde o usuário pode criar e acompanhar as suas tarefas. Essa aplicação foi feita com o Nextjs e TailwindCSS.
                </p>
              </div>
              <div className="flex text-white justify-between text-3xl">
                <div>
                  <h2 className="text-lg mb-1">
                    Tecnologias
                  </h2>
                  <div className="flex gap-2 ">
                    <Link target="_blank" href='https://react.dev/'>
                      <FaReact />
                    </Link>
                    <Link target="_blank" href='https://tailwindcss.com/'>
                      <SiTailwindcss />
                    </Link>
                    <Link target="_blank" href='https://nextjs.org/'>
                      <TbBrandNextjs />
                    </Link>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <Link target="_blank" href='https://youtu.be/b-SH-ZTpdpM'>
                    <AiOutlineYoutube />
                  </Link>
                  <Link target="_blank" href='https://www.instagram.com/yinovar/'>
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <form
          onSubmit={(ev) => sendMessage(ev)}
          className="max-w-xl bg-white rounded-lg p-4 border border-gray-300 flex flex-col gap-4 mx-3 md:mx-auto my-10"
        >
          <div>
            <h4 className="font-semibold">Tem alguma dúvida? mande uma mensagem</h4>
          </div>
          <label className="flex flex-col">
            Nome
            <input
              className="outline-blue-500 py-1.5 px-2 rounded-md border-2 border-gray-300 transition-all"
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Mensagem
            <textarea
              className="outline-blue-500 py-1.5 px-2 rounded-md border-2 border-gray-300 min-h-[100px] transition-all"
              type="text"
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              placeholder="Mande sua mensagem aqui..."
            />
          </label>
          <input
            type="submit"
            className="cursor-pointer bg-green-500 py-2 px-3 rounded-md text-white font-semibold tracking-wide hover:bg-green-600 transition-all w-fit mt-4 outline-none focus:ring-2 ring-blue-500"
            value='Enviar WhatsApp'
          />
        </form>
      )}
    </div >
  )
}
