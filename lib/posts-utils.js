import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data');

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory, 'utf-8');
}
export const getPostData = (postId) => {
    const filePath = path.join(postsDirectory, postId);
    const fileContent = fs.readFileSync(filePath + (filePath.includes('.md') ? '' : '.md'), 'utf-8');
    const postSlug = postId.replace(/\.md$/, '');
    const { data, content } = matter(fileContent);
    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
}
export const getPosts = () => {
    const files = getPostsFiles();
    const allPosts = files.map(postFile => getPostData(postFile));

    return allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
};

export const getFeaturedPosts = () => {
    const allPosts = getPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}