import { getFile } from "./index.mjs";
import validateURLs from "./http-validations.mjs";
import chalk from "chalk";

const path = process.argv;

async function textHandler(filePath) {
  const result = await getFile(filePath[2]);
  if (filePath[3] === "validate") {
    console.log(chalk.blueBright.bold("Validated links"), await validateURLs(result));
  } else {
    console.log(chalk.blueBright.bold("Links list: "), result);
  }
}

textHandler(path);
