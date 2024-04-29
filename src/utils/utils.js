/**
 * The function `formatDate` takes a timestamp as input and returns a formatted date in the format
 * "Month Day, Year".
 * @param timestamp - The `timestamp` parameter is a Unix timestamp, which represents the number of
 * seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
 * @returns The `formatDate` function returns a formatted date string in the format "Month Day, Year"
 * based on the timestamp provided as input.
 */
export function formatDate(timestamp) {
  var date = new Date(timestamp * 1000);

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

/**
 * The `formatTime` function in JavaScript converts a Unix timestamp to a formatted time string in the
 * format "HH:MM".
 * @param timestamp - The `formatTime` function takes a timestamp as input, which is the number of
 * seconds since January 1, 1970.
 * @returns The function `formatTime` returns a formatted time string in the format "HH:MM" based on
 * the provided timestamp.
 */
export function formatTime(timestamp) {
  var date = new Date(timestamp * 1000);

  var hours = date.getHours();
  var minutes = date.getMinutes();

  minutes = (minutes < 10 ? "0" : "") + minutes;

  var formattedTime = hours + ":" + minutes;

  return formattedTime;
}

/**
 * The `renderImage` function categorizes weather conditions based on the provided weather ID and
 * returns corresponding image names.
 * @param weatherId - The `weatherId` parameter represents the code that identifies the weather
 * conditions. Based on the provided code snippet, the `renderImage` function takes this `weatherId` as
 * input and returns a corresponding weather condition.
 * @returns The `renderImage` function returns a string representing the weather condition based on the
 * provided `weatherId`. The possible return values are "Rain" for weather IDs between 200 and 549,
 * "Snow" for weather IDs between 600 and 649, "Clear" for weather IDs 800 or 801, "Cloudy" for weather
 * IDs between 802 and 804, and an
 */
export function renderImage(weatherId) {
  if (weatherId >= 200 && weatherId < 550) {
    return "Rain";
  } else if (weatherId >= 600 && weatherId < 650) {
    return "Snow";
  } else if (weatherId === 800 || weatherId === 801) {
    return "Clear";
  } else if (weatherId >= 802 && weatherId < 805) {
    return "Cloudy";
  } else {
    return "";
  }
}
