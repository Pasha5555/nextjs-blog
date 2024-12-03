import Head from "next/head";
import Posts from "../../components/posts/posts";
import { getPosts } from "../../lib/posts-utils";

const PostsPage = ({ posts }) => {
    return <>
        <Head>
            <title>Pablo`s blog</title>
            <meta name="description" content="Posts" />
        </Head>
        <Posts posts={posts} />
    </>
};

export function getStaticProps() {
    const posts = getPosts();

    return {
        props: {
            posts
        }
    }
}

export default PostsPage;