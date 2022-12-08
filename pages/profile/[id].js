import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { PersonContext } from "../../context/context";

const Profile = ({ data, tasks }) => {
  const { person, setPerson } = useContext(PersonContext);
  const { fullName, age, occupation, gender, nickname, picture, id } = data;
  const { title, description, completed, startDate, endDate, personId } = tasks;

  return (
    <div
    className="flex items-center
    flex-row justify-center gap-4 text-white font-bold text-xl mt-12"
    >
      <div className="mr-10">
        <h1 className="text-xl uppercase text-center border-2">
          Profile information:{''} 
        </h1>
        <p>Name: {fullName}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Profession: {occupation}</p>
        <p>Nickname: {nickname}</p>
        <div className="mt-4">
          <Link
            className="bg-amber-500 hover:bg-amber-600 hover:text-white text-black py-2 px-4 uppercase rounded-xl font-bold"
            href={`/profile/edit/${id}`}
          >
            Edit
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-1xl uppercase text-center border-2 mt-7">
          Tasks information:{''}
        </h1>
        <p>Task: {title}</p>
        <p>description: {description}</p>
        {tasks.complete? 
          <p>State: <span className="text-green-500 "> Complete</span></p> :  
          <p>State: <span className="text-red-600 "> Incomplete</span></p>
          }
        <p>Data: {startDate}</p>
        <p>EndDate: {endDate}</p>
        <p>Id: {personId}</p>
        <div className="mt-4">
          <Link
            className="bg-amber-500 hover:bg-amber-600 hover:text-white text-black py-2 px-4 uppercase rounded-xl font-bold"
            href={`/profile/edit/${id}`}
          >
            Edit
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <Image
          className="rounded-full"
          alt="image"
          src={picture}
          width={200}
          height={100}
        />
      <Link
       className="bg-amber-500 hover:bg-amber-600 hover:text-white text-black py-2 px-4 uppercase rounded-xl font-bold text-center mt-4"
      href={`/`}
    >Back to home</Link>
      </div>
    </div>
  );
};
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/persons");
  const data = await res.json();
  const getTasks = await fetch("http://localhost:3001/tasks");
  const tasks = await getTasks.json();

  const paths = data.map((data) => {
    return {
      params: { id: data.id.toString(), tasks: tasks.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3001/persons/" + id);
  const data = await res.json();
  const getTasks = await fetch("http://localhost:3001/tasks/" + id);
  const tasks = await getTasks.json();

  return {
    props: {
      data: data,
      tasks: tasks,
    },
  };
};

export default Profile;
