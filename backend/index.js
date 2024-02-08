const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/index');


const PORT = 3000; 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('bad request');
})
app.use('/api/v1', mainRouter);