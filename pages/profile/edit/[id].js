import { useState } from 'react'
import Formulario from '../../../components/formulario'

const Edit = ({data}) => {
  const [person, setPerson] = useState({
    fullName: '',
    age: '',
    occupation: '',
    gender: '',
    nickname: '',
    picture: '',
  })
  return (
    <div>
        <Formulario
          person={person}
          setPerson={setPerson}
          data={data}
        />
      
    </div>
  )
}
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/persons')
  const data = await res.json()

  const paths = data.map((data) => {
    return {
      params: { id: data.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('http://localhost:3001/persons/' + id)
  const data = await res.json()

  return {
    props: { data },
  }
}

export default Edit