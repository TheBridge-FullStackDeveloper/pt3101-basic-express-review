const express = require("express");
const PORT = 3000;

// middleware aplicación
// middleware enrutamiento
// middleware error

const app = express();
app.use(express.json());
app.use("/static/images", express.static("public"));

const routes = require("./routes");

app.use("/", routes);

app.use("/hello", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: "hello!",
    },
  });
});

app.use((req, res, next) => {
  next(new Error("path not found"));
});

app.use((error, req, res, next) => {
  res.status(404).json({
    success: false,
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.info("> servidor tela de básico");
});
