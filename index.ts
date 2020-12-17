// Import stylesheets
import "./style.css";
import moment from "moment";
import "moment-timezone";

import { getDate, isSameDay } from "date-fns";
import { utcToZonedTime, format, toDate } from "date-fns-tz";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
// const date = new Date();

// const newDate = moment.tz(date, 'America/Los_Angeles');
let resultDate = moment.tz("2020-12-17T00:00:00.000Z", "America/Los_Angeles");

const date = utcToZonedTime("2020-12-17T00:00:00.000Z", "America/Los_Angeles", {
  timeZone: "America/Los_Angeles"
});

const newDa = format(date, "yyyy-MM-dd HH:mm:ss zzz", {
  timeZone: "America/Los_Angeles"
});
// const date1 = moment(new Date()).isSame(new Date(), `date`);
// const date2 = isSameDay(
//   new Date("2020-12-17T00:00:00.000Z"),
//   new Date("2020-12-17T01:00:00.001Z")
// );

// const nyDate = toDate('2020-12-17T00:00:00.000Z America/Los_Angeles')
// format(date, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'America/Los_Angeles' });

// let getDate1 = getDate(new Date());
appDiv.innerHTML = `<h1>Date: ${resultDate}</h1> <h1>new Date: ${newDa}</h1>`;
