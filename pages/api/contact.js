import { connectDB } from "../../lib/db-util";

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        
        if (!email || !email.includes('@') || !name || !message) {
            res.status(422).json({ message: 'Invalid input' });
        }

        const newMessage = {
            email,
            name, 
            message
        };

        let client;
        try {
            client = await connectDB();
        } catch(e) {
            console.log(e);
            res.status(500).json({ message: 'Couldn`t connect to DB' });
            return;
        }
        const db = client.db();
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            result.id = result.insertedId;
        } catch(e) {
            res.status(500).json({ message: 'Failed to store the message' });
            return;
        }

        res.status(201).json({ message: 'Successfully stored message', message: newMessage })
    }
}

export default handler;