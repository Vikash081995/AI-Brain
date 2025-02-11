import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function DemoCounter() {
  const count = useSelector((state: RootState) => state.dummyReducer.count);
  return <div>Count: {count}</div>;
}

export default DemoCounter;
