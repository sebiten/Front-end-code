import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Front end test</title>
      </Head>
      <main className="flex flex-col items-center">
        {data.map((data) => (
          <Link key={data.id} href={'/profile/' + data.id}>
          <Card className="bg-gray-200" data={data} />
          </Link>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/persons");
  const data = await res.json();

  return {
    props: { data },
  };
};
