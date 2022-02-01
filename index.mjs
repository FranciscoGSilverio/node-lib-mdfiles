import chalk from "chalk";
import fs from "fs";

function getLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultsArr = [];
  let temp;
  while ((temp = regex.exec(text)) !== null) {
    resultsArr.push({ [temp[1]]: temp[2] });
  }
  return resultsArr.length === 0 ? "no links in file" : resultsArr;
}

function errorHandle(error) {
  throw new Error(chalk.red(error.code, "no file in path"));
}

export async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    return getLinks(text);
  } catch (error) {
    errorHandle(error);
  } finally {
    console.log(chalk.blue("Operation finished"));
  }
}
