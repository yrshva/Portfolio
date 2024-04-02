import { DAYS, MONTHS } from "./dateConstants";

const getForecastDay = (dt: number) => {
  const date = new Date(dt * 1000);
  return `${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}`;
};
export default getForecastDay;
