import { GatsbyNode } from "gatsby"
import path , { resolve } from "path";



export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage, createSlice} = actions;
  
  // await pagination(createPage, graphql);
  // await detailPage(createPage, graphql);
  // await tagsPage(createPage, graphql);

  createSlice({
    id: "Header",
    component: path.resolve("src/components/header.tsx"),
  });
  createSlice({
    id: "Footer",
    component: path.resolve("src/components/footer.tsx"),
  });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": resolve(__dirname, `src`),
      },
    },
  });
};