import Head from "next/head";
import Image from "next/image";
import { getAllPostData } from "../utils/posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Nadya Pratiwi Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col shadow-2xl shadow-slate-300 mt-2 mx-4 bg-white rounded border border-slate-200">
        <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-2xl font-semibold">
          Nadya Hari Pratiwi
        </h1>

        <div className="h-px w-full opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"></div>

        <div className="flex flex-col gap-1 pl-4">
          {["About", "LinkedIn", "Instagram"].map((item) => (
            <p className="text-gray-500 font-light py-1" key={item}>
              {item}
            </p>
          ))}
        </div>

        <div className="h-px w-full opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"></div>

        <span className="ml-4 text-slate-400">Blog posts ~</span>

        <div className="flex flex-col p-4">
          {posts.map((x) => (
            <div
              className="flex flex-col border border-slate-200 p-2 rounded"
              key={x}
            >
              <span className="text-slate-600 text-lg">{x.title}</span>
              <span className="text-slate-500 text-sm py-2">{x.summary}</span>
              <span className="text-slate-400 text-xs font-extralight">
                {x.date}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getAllPostData()).map((x) => x.data);
  return {
    props: {
      posts,
    },
  };
};
