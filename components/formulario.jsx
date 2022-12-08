import React from 'react'

const formulario = () => {
  return (
    <div>
    <form 
      onSubmit={handleSubmit}
     className='w-auto mr-12'>
      <div className="mb-4">
        <label className="text-white" htmlFor="nombre">
          FullName:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 text-black bg-gray-50"
          placeholder={name}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="text-white" htmlFor="age">
          Age:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 text-black bg-gray-50"
          placeholder={age}
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="occupation">
          Occupation:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 text-black bg-gray-50"
          placeholder={occupation}
          value={profesion}
          onChange={(e) => setProfesion(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="nickname">
          NickName:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 text-black bg-gray-50"
          placeholder={nickname}
          value={apodo}
          onChange={(e) => setApodo(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="gender">
          Gender:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 text-black bg-gray-50 h-40 align-self"
          placeholder={gender}
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
      

    </form>
    </div>
  )
}

export default formulario