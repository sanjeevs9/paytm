const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/index');


const PORT = 3000; 
const IP_ADDRESS = '0.0.0.0'; // Bind to all available network interfaces

// Bind the server to the specified IP address and port
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on ${IP_ADDRESS}:${PORT}`);
});

app.use('/api/v1', mainRouter);