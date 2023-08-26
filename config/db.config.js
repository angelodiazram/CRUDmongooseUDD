import mongoose from 'mongoose';

export const db = async() => {
    try {
        await mongoose.connect(process.env.DB_LOCALHOST, {
            userNewUrlParser: true,
            userUnifiedTopoLogy: true
        });
        console.log('connect to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB')
    }
}