import {CalendarConfig} from "./CalendarConfig";
import {RegisterConfig} from "../../../shared/config/configFilesManager";

export const registerConfigs = () => {
  RegisterConfig({name: "client/calendar.json", default: config});
};

const config: CalendarConfig = {
  __comment__calendarURL: "Information on how to get a calendar URL is available at https://support.google.com/calendar/answer/41207",
  calendarURL: "https://calendar.google.com/calendar/embed?src=xxxxxxxxxxx",
  url: "/calendar"
};