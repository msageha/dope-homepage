// gatsby-node.ts

import { GatsbyNode } from "gatsby"

const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.js"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.js"),
  })
}

export { createPages }