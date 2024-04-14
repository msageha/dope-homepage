import { GatsbyNode } from "gatsby"
import { resolve } from "path";


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

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage, createSlice} = actions;
  
  // await pagination(createPage, graphql);
  // await detailPage(createPage, graphql);
  // await tagsPage(createPage, graphql);

  createSlice({
    id: "Header",
    component: resolve("src/components/header.tsx"),
  });
  createSlice({
    id: "Footer",
    component: resolve("src/components/footer.tsx"),
  });
};
