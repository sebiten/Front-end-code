import Image from "next/image";

export default function Card({ data }) {

  return (
    <div className="card">
      <div className="mt-4">
        <Image
          className="rounded-full"
          src={data?.picture} 
          alt={data?.fullName}
          width={200}
          height={200}
        />
      </div>
      <div className="bg-slate-900/20 rounded-xl text-white uppercase flex flex-col items-center gap-2 font-bold">
        <h3 >{data?.fullName}</h3>
        <p>{data?.age}</p>
        <p >{data?.occupation}</p>
      </div>
    </div>
  );
}
