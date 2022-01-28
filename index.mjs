import chalk from "chalk";
import fs from "fs";

function errorHandle(error) {
  throw new Error(chalk.red(error.code, "no file in path"));
}

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(chalk.green(text));
  } catch (error) {
    errorHandle(error);
  }
}

getFile("./arquivos/texto1.md");
