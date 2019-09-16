import mongoose from 'mongoose';

export const db = {
    connect: async function(uri: string) {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    }
} 
