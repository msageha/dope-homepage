import { GatsbyNode } from "gatsby"
import path from "path";



const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage, createSlice} = actions;
  // await pagination(createPage, graphql);
  // await detailPage(createPage, graphql);
  // await tagsPage(createPage, graphql);

  createSlice({
    id: "Header",
    component: path.resolve("./src/components/Header.tsx"),
  });
  createSlice({
    id: "Footer",
    component: path.resolve("./src/components/Footer.tsx"),
  });
};

export { createPages }