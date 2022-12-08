import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Profile = ({person}) => {

  const { fullName, age, occupation, gender, nickname, picture, id } = person;
  return (
    <div className='flex items-center justify-center mt-24'>
      <div className='flex items-center
      flex-row justify-center gap-4 text-white font-bold text-xl'>
      <div>
      <h1 className='text-2xl uppercase text-center border-b-2'>Profile information: </h1>
      <p>Name: {fullName}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Profession: {occupation}</p>
      <p>Nickname: {nickname}</p>
      </div>
      <div className='flex flex-row'>

      <Image alt='image' src={picture} width={200} height={100} />

      </div>
      <Link className='bg-amber-500 hover:bg-amber-600 hover:text-white text-black p-4 uppercase rounded-xl' href={`/profile/edit/${id}`}>Edit</Link>
      </div>

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
    props: { person: data },
  }
}

export default Profile