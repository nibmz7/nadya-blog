import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPostData } from "../utils/posts";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col shadow-2xl shadow-slate-300 mt-2 mx-4 bg-white rounded border border-slate-200">
      <Head>
        <title>Home</title>
        <meta name="description" content="Nadya Pratiwi Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-2xl font-semibold">
        Nadya Hari Pratiwi
      </h1>

      <div className="h-px w-full opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"></div>

      <div className="flex flex-col gap-1 pl-4">
        {[
          { title: "About", link: "/about" },
          {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/nadya-hari-pratiwi-a71390222/",
          },
          {
            title: "Instagram",
            link: "https://instagram.com/nadyaharipratiwi?igshid=YmMyMTA2M2Y=",
          },
        ].map(({ title, link }) => (
          <Link key={title} href={link}>
            <p className="text-gray-500 font-light py-1">{title}</p>
          </Link>
        ))}
      </div>

      <div className="h-px w-full opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"></div>

      <span className="ml-4 text-slate-400">Blog posts ~</span>

      <div className="flex flex-col p-4 gap-3">
        {posts.map((x) => (
          <Link href={`/posts/${x.slug}`} key={x}>
            <div className="flex flex-col border border-slate-200 p-2 rounded">
              <span className="text-slate-600 text-lg">{x.title}</span>
              <span className="text-slate-500 text-sm py-2">{x.summary}</span>
              <span className="text-slate-400 text-xs font-extralight">
                {x.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
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
