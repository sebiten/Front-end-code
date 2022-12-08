import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PersonContext } from "../context/context";

const Formulario = ({ data }) => {
  const { person, setPerson, handleNavigate } = useContext(PersonContext);
  const router = useRouter();
  const [nombre, setNombre] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [profesion, setProfesion] = React.useState("");
  const [apodo, setApodo] = React.useState("");
  const [genero, setGenero] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre,
      edad,
      profesion,
      apodo,
      genero,
    };
    setPerson(data);
  };

function changeArray(dataChange){
    fetch(`http://localhost:3001/persons` + data.id, {
      method: 'PATCH',
      headers: {
          'Content-Type':'application/json'
      },
        body: JSON.stringify(functionAbove)
      })
      .then(res => res.json())
      .then(json => consol.log(json))
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <div className="mb-4">
          <label className="text-white" htmlFor="nombre">
            FullName:
          </label>
          <input
            type="text"
            className="mt-2 block w-full p-3 text-black bg-gray-50"
            placeholder="Full Name"
            value={nombre}
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-white" htmlFor="age">
            Age:
          </label>
          <input
            type="text"
            className="mt-2 block w-full p-3 text-black bg-gray-50"
            placeholder="Age"
            value={edad}
            name="age"
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="occupation">
            Occupation:
          </label>
          <input
            type="text"
            className="mt-2 block w-full p-3 text-black bg-gray-50"
            placeholder="Occupation"
            value={profesion}
            name="occupation"
            onChange={(e) => setProfesion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="nickname">
            NickName:
          </label>
          <input
            type="tel"
            className="mt-2 block w-full p-3 text-black bg-gray-50"
            placeholder="NickName"
            value={apodo}
            name="nickname"
            onChange={(e) => setApodo(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="gender">
            Gender:
          </label>
          <textarea
            type="text"
            className="mt-2 block w-full p-3 text-black bg-gray-50 h-40 align-self"
            placeholder="Gender"
            value={genero}
            name="gender"
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>
        <button
          className="bg-amber-500 hover:bg-amber-600 hover:text-white text-black p-4 uppercase rounded-xl font-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formulario;
