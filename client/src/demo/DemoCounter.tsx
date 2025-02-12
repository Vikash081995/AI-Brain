import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../slices/demoSlice";

function DemoCounter() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state: RootState) => state.dummyReducer.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div>
        <label htmlFor="amount">Increment by:</label>
        <input
          id="amount"
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          aria-label="Set increment amount"
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button type="button" onClick={resetAll}>
          resetAll
        </button>
      </div>
    </section>
  );
}

export default DemoCounter;
