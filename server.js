const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

let corsOptions = {
  origin: "https://logalhost:8081",
};

app.use(cors(corsOptions));
// parse request of content-type - application/json
app.use(express.json());
// parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    greeting: "hello world!",
    body: "welcome to my site",
    test: "is this working",
  });
});

app.post("/", (req, res) => {
  res.send("You just called the post method at '/hello'!\n");
});

// set port, listen for requests
require("./app/routes/playlist.routes.ts")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
