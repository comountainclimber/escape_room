const express = require("express");
const app = express();
const port = 3000;

app.get("*.jsgz", function(req, res, next) {
  res.set("Content-Encoding", "gzip");
  res.set("Content-Type", "text/javascript");
  next();
});
app.get("*.datagz", function(req, res, next) {
  res.set("Content-Encoding", "gzip");
  next();
});

app.get("*.wasmgz", function(req, res, next) {
  res.set("Content-Encoding", "gzip");
  next();
});

app.use(express.static("static"));

app.listen(process.env.PORT || 3000, () =>
  console.log(`App listening on port ${process.env.PORT || 3000}!`)
);
