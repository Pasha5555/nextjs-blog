import PostsGrid from './posts-grid';
import classes from './posts.module.css';

const Posts = ({ posts }) => {
    return (
        <section className={classes.posts}>
            <h1>All posts</h1>
            <PostsGrid posts={posts} />
        </section>
    );
};

export default Posts;