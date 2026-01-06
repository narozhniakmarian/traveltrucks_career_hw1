import { CirclesWithBar } from "react-loader-spinner";

export function Loader() {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#e44848"
      outerCircleColor="#e44848"
      innerCircleColor="#475467"
      barColor="#e44848"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
