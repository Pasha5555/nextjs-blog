import { useEffect, useState } from 'react';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';

const sendContactData = async ({email, name, message}) => {
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            name,
            message
        })
    });
    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(data.message);
    }
};

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus(null);
                setError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        setStatus('pending');

        try {
            await sendContactData({
                email,
                name,
                message
            });
            setStatus('success');
        } catch(e) {
            setStatus('error');
            setError(e.message);
        }
        
    };

    let notificationData;

    if (status === 'pending') {
        notificationData = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on the way'
        }
    }

    if (status === 'success') {
        notificationData = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }

    if (status === 'error') {
        notificationData = {
            status: 'error',
            title: 'Error!',
            message: error
        }
    }

    return (
        <section className={classes.contact}>
            <h1>How I can help you?</h1>
            <form className={classes.form} onSubmit={sendMessage}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your email</label>
                        <input 
                            type='email' 
                            id='email' 
                            value={email} 
                            onChange={({target}) => setEmail(target.value)}
                            required 
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your name</label>
                        <input 
                            type='text' 
                            id='name'
                            value={name} 
                            onChange={({target}) => setName(target.value)}
                            required 
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your message</label>
                    <textarea 
                        id='message' 
                        rows='5'
                        value={message} 
                        onChange={({target}) => setMessage(target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <button>Send message</button>
                </div>
            </form>
            { notificationData && <Notification 
                status={notificationData.status}
                title={notificationData.title}
                message={notificationData.message}
            /> }
        </section>
    )
};

export default ContactForm;