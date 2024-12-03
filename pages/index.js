import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-utils";

const HomePage = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Pablo`s blog</title>
                <meta name="description" content="My posts app" />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
};

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60
    }
}

export default HomePage;