const mongoose = require('mongoose');
const User = require('./models/user');
const sampleData = require('./sample_data.json');

mongoose.connect('mongodb://localhost/sample_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(sampleData);
    console.log('Sample data loaded successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
