import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getPostList = async () => {
  return fs.promises.readdir(POSTS_PATH);
};

export const getSinglePostData = async (slug: string) => {
  const postFilePath = path.join(
    POSTS_PATH,
    slug.endsWith(".mdx") ? slug : `${slug}.mdx`
  );
  const source = await fs.promises.readFile(postFilePath);
  return matter(source);
};

export const getAllPostData = async () => {
  const postList = await getPostList();
  const allPostData = await Promise.all(
    postList.map((slug) => getSinglePostData(slug))
  );
  return allPostData;
};
