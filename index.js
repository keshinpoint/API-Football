const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: "Football API",
      version: "1.0.0",
      description: "A simple API to obtain information about various footballers playing for the local community soccer field",
      contact: {
        name: "Keshav",
        email: "yourcall@example.com",
      },
    },
    servers:  [
      {
        url: 'http://localhost:3000',
        description: 'Local development server',
      },
      {
        url: 'https://stormy-peak-11709.herokuapp.com',
        description: 'Heroku production server',
      },
    ],
  },
    apis: ["./routes/*js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const NODE_ENV = process.env.NODE_ENV || "development";

app.set("port", PORT);
app.set("env", NODE_ENV);

app.use(logger("tiny"));
app.use(bodyParser.json());

app.use("/", require(path.join(__dirname, "routes/stats")));

app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} Not Found`);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});

app.listen(PORT, () => {
    console.log(
        `Express Server started on Port ${app.get(
            "port"
        )} | Environment : ${app.get("env")}`
    );
});
