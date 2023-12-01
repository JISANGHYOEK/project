const express = require("express");
const api = require("./Router/api");
const { db, app } = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://10000mr.com",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", api);

const port = 8080; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
