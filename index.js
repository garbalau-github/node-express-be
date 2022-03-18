import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 4001;

const DB_URL =
  'mongodb+srv://<username>:<password>@cluster0.arzdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

// Middlewares
app.use(express.json());
app.use('/api', router);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startApp();
