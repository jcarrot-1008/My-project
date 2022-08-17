import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('.env 파일에 몽고DB URL이 없어요');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(mongoose => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
