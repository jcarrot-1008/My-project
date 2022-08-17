import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //필수값
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
    maxlength: 60,
  },
  password: {
    type: String,
    maxlength: 20,
    minLength: 3,
  },
  age: {
    type: Number,
  },
  isAdmin: {
    type: Boolean,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
