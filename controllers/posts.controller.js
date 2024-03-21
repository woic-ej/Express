const path = require("path");

function getPost(req, res) {
  res.render("posts", {
    templateName: "posts",
  });
}

module.exports = {
  getPost,
};
