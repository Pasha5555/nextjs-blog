import Head from "next/head";
import ContactForm from "../../components/contact/contact-form";

const ContactPage = () => {
    return <>
        <Head>
            <title>Pablo`s blog</title>
            <meta name="description" content="Send me your thoughts" />
        </Head>
        <ContactForm />
    </>;
};

export default ContactPage;