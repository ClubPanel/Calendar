import {ClientRegisterCallback} from "../../../shared/module/moduleClient";
import {GetConfig} from "../../../shared/config/configStore";
import {CalendarConfig} from "../config/CalendarConfig";

export const registerClient = (RegisterClientPage: ClientRegisterCallback) => {
  const configs = GetConfig<CalendarConfig>("client/calendar.json");

  RegisterClientPage(configs.url, {
    name: "Calendar"
  }, "./client/components/CalendarPageComponent.tsx");
};