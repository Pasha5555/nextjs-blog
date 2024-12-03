import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src={'/images/site/welcome.png'} 
                    alt='Welcome image' 
                    width={300} 
                    height={300} 
                />
            </div>
            <h1>Hi, I`m Pablo</h1>
            <p>A blog about web development</p>
        </section>
    );
};

export default Hero;