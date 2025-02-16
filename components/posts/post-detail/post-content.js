import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = ({ post }) => {
    const imagePath = `/images/posts/${post.image}`;
    const customRenderers = {
        // image(image) {
        //     return <Image 
        //         src={`/images/posts/${image.src}`} 
        //         alt={image.alt} 
        //         width={600} 
        //         height={300} 
        //     />
        // },
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return <div className={classes.image}>
                    <Image 
                        src={`/images/posts/${image.properties.src}`} 
                        alt={image.alt} 
                        width={400} 
                        height={300} 
                    />
                </div>
            }

            return <p>{paragraph.children}</p>
        },
        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1];

            return (
                <SyntaxHighlighter 
                    language={language}
                    children={children}
                    style={atomDark}
                />
            )

        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            {post.content}
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;