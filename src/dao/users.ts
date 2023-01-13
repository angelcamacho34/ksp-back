import mongoose from 'mongoose';

main().catch(err => console.log(err));

/**
 * Database connection
 */
async function main() {
    const uri = "mongodb+srv://angel:07oNV100oKzHETMw@cluster0.zopuq.mongodb.net/ksp?retryWrites=true";
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
}
