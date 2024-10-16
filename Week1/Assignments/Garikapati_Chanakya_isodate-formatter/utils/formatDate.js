import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

// Function to format ISO date to "January 1, 2023, 12:34:56 PM UTC"
export function formatToReadableString(isoDate) {
  return dayjs(isoDate).utc().format("MMMM D, YYYY, h:mm:ss A [UTC]");
}

// Function to format ISO date to "4 months ago"
export function formatToRelativeTime(isoDate) {
  return dayjs(isoDate).fromNow();
}

// Function to format ISO date to "Thursday, January 21, 2023"
export function formatToFullDate(isoDate) {
  return dayjs(isoDate).format("dddd, MMMM D, YYYY");
}

// Function to format ISO date to "01/21/2023"
export function formatToShortDate(isoDate) {
  return dayjs(isoDate).format("MM/DD/YYYY");
}
