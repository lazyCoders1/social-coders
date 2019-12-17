require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

// Controllers
const authCtrl = require("./controllers/authCtrl");
const postCtrl = require("./controllers/postController");
const commentCtrl = require("./controllers/commentController");

// Middleware
const auth = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SECRET,
    cookie: { secure: false }
  })
);

// Auth Endpoints
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.delete("/auth/logout", authCtrl.logout);

// Post Endpoints
app.get("/api/posts", postCtrl.getAllPosts);
app.get("/api/posts/:id", postCtrl.getOnePost);
app.get("/api/user/posts/:id", postCtrl.getUsersPosts);

app.post("/api/posts", auth.usersOnly, postCtrl.addPost);
app.delete("/api/posts/:id", postCtrl.deletePost);
app.patch("/api/posts/:id", postCtrl.updatePost);

// Comment Endpoints
app.get("/api/comments/:id", commentCtrl.getComments);
app.post("/api/comments", /* auth.usersOnly */ commentCtrl.addComment);
app.delete("/api/comments/:id", commentCtrl.deleteComment);
app.patch("/api/comments/:id", commentCtrl.updateComment);

//*******AUTHENTICATION*******//
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.delete("/auth/logout", authCtrl.logout);

massive(CONNECTION_STRING).then(database => {
  app.set("db", database);
  app.listen(SERVER_PORT, () =>
    console.log(`listening on port ${SERVER_PORT}`)
  );
});
