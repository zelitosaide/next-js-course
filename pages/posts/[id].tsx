import Layout from "@/components/layout";
import { getAllPostIds } from "@/lib/posts";

export async function getStaticPaths() {
  const paths : any = getStaticPaths();

  return {
    paths,
    fallback: false
  }
}

export default function Post() {
  return <Layout></Layout>;
}