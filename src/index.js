const express = require('express');
const booksRouter = require('./routers/books');
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(booksRouter);

app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`);
});