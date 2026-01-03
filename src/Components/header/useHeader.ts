import { useAppSelector } from "@Store/hooks";

const UseHeader = () => {
  const { records, temp } = useAppSelector((state) => state.weather);
  const { location, current, forecast } = records || {};
  return { location, current, forecast, temp };
};
export default UseHeader;
