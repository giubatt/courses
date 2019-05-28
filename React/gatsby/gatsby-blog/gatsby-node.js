const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/somefakepage",
    component: path.resolve("./src/components/postLayout.js"),
  })
}
