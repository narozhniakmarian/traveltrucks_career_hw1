import { CirclesWithBar } from "react-loader-spinner";

export function Loader() {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="var(--button)"
      outerCircleColor="#4fa94d"
      innerCircleColor="var(--gray)"
      barColor="#4fa94d"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
