import {RenderProps} from "../../../../pages/[[...name]]";
import {GetConfig} from "../../../../shared/config/configStore";
import {CalendarConfig} from "../../config/CalendarConfig";
import React from "react";

import "./CalendarPageComponent.module.scss";

const CalendarPageComponent = ({config}: RenderProps) => {
  const configs = GetConfig<CalendarConfig>("client/calendar.json", config);

  return (
    <iframe
      src={configs.calendarURL}
      className="calendar-iframe"
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="no"
    />
  );
};

export default CalendarPageComponent;