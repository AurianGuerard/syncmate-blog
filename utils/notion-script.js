/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check

const NotionParse = require("@kodaps/notion-parse");
const dotenv = require("dotenv");

dotenv.config();

const go = async () => {
  if (process.env.NOTION_SECRET) {
    await NotionParse.parseNotion(process.env.NOTION_SECRET, "./", [
      // {
      //   databaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID || "",
      //   contentType: "Portfolio",
      // },
      {
        databaseId: process.env.NOTION_POST_DATABASE_ID || "",
        contentType: "Post",
        languageField: "lang",
        filterFields: ["translation", "createdAt", "status", "Type"],
      },
    ], true);
  }
};

go().then(() => {
  console.log("Done");
});
