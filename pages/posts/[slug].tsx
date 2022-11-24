import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostList, getSinglePostData } from "../../utils/posts";
import Link from "next/link";
import HomeIconSVG from "../../components/home-icon";

export default function PostPage({ source, frontMatter }) {
  return (
    <div className="flex flex-col shadow-2xl shadow-slate-300 mt-2 mx-4 bg-white rounded border border-slate-200 px-4 py-5">
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <div className="flex">
        <Link href="/">
          <HomeIconSVG className="mr-3 fill-red-200" />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{frontMatter.title}</h1>
          <span className="text-slate-400 text-sm">{frontMatter.date}</span>
        </div>
      </div>
      <div className="h-px w-full opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-3"></div>
      <MDXRemote {...source} />
    </div>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { content, data } = await getSinglePostData(params.slug);

  data.date = data.date.toString();

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = (await getPostList())
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
