import Head from "next/head";

const markdownComponents = {
  // wrapper: (props) => {
  //   return (
  //     <Head>
  //       <title>Nur Ilyas Blog</title>
  //     </Head>
  //   );
  // },
  h1: (props) => {
    return (
      <h1 className="mt-6 first:mt-0 mb-2 text-2xl font-bold">
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return <h2 className="mt-6 mb-2 text-xl font-medium">{props.children}</h2>;
  },
  p: (props) => {
    return <p className="mb-2">{props.children}</p>;
  },
  a: (props) => {
    return (
      <a className="hover:underline" href={props.href} target="_blank">
        {props.children}
      </a>
    );
  },
  em: (props) => {
    return (
      <em className="text-indigo-700" href={props.href} target="_blank">
        {props.children}
      </em>
    );
  },
  ul: (props) => {
    return <ul className="list-disc pl-5">{props.children}</ul>;
  },
  ol: (props) => {
    return <ol className="list-decimal pl-5">{props.children}</ol>;
  },
};

export default markdownComponents;
