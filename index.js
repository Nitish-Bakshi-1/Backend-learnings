import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.cookie("token", "iamin", {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.listen(5000, function () {
  console.log("done");
});
