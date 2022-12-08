import Image from "next/image";
import { useContext } from "react";

export default function Card({ data }) {



  return (
    <div className="card hover:scale-90">
      <div className="mt-4">
        <Image
          className="rounded-full"
          src={data?.picture} 
          alt={data?.fullName}
          width={200}
          height={200}
        />
      </div>
      <div className="bg-slate-900/20 rounded-xl text-white uppercase flex flex-col items-center gap-2 font-bold p-4 ">
        <h3>{data?.fullName}</h3>
        <p>{data?.age}</p>
        <p >{data?.occupation}</p>
      </div>
    </div>
  );
}
