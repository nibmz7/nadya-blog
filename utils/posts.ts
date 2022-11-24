import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parse } from "date-fns";

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
  const result = matter(source);
  const { data } = result;
  // 19 Nov 2022 13:00PM
  data.timestamp = parse(data.date, "d MMM yyyy h:mma", new Date()).getTime();
  data.slug = slug.replace(".mdx", "");
  return result;
};

export const getAllPostData = async () => {
  const postList = await getPostList();
  const allPostData = await Promise.all(
    postList.map((slug) => getSinglePostData(slug))
  );
  allPostData.sort((a, b) => b.data.timestamp - a.data.timestamp);
  return allPostData;
};
