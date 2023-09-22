const express = require('express');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: "*"
    })
);

const appRoutes = require('./routes/appRoutes');

app.use("/app", appRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server listening on PORT: "+PORT);
})