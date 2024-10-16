import chalk from "chalk";
import {
  formatToReadableString,
  formatToRelativeTime,
  formatToFullDate,
  formatToShortDate,
} from "./utils/formatDate.js";

// Example ISO dates to test
const dates = [
  "2023-01-01T12:34:56Z",
  "2022-05-15T08:00:00Z",
  "2020-08-25T14:45:30Z",
  "2019-11-11T10:10:10Z",
  "2021-04-22T22:22:22Z",
];

// Testing the functions and logging output
dates.forEach((date) => {
  console.log(chalk.blue(`Readable String: ${formatToReadableString(date)}`));
  console.log(chalk.green(`Relative Time: ${formatToRelativeTime(date)}`));
  console.log(chalk.magenta(`Full Date: ${formatToFullDate(date)}`));
  console.log(chalk.yellow(`Short Date: ${formatToShortDate(date)}`));
  console.log("----------------------------------");
});
