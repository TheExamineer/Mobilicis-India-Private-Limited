const User = require('./roots/user');
const usersRouter = require('./routes/users');


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/sample_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB database');
});
