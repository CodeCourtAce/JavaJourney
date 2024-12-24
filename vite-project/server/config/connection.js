
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/coffee-culture', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default mongoose.connection;


// import mongoose from 'mongoose';

// // temporary connection to local database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/coffee-regions', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

// export default mongoose.connection;