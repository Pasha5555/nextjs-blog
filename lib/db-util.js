import { MongoClient } from "mongodb";

export async function connectDB() {
    const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.n2nvd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`;
    const client = await MongoClient.connect(url);

    return client;
}
