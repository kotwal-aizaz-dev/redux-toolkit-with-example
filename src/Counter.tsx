import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./counter/counterSlice";

function Counter() {
  //access redux state
  const count = useSelector((state: RootState) => state.counter.value);

  //dispatch actions to redux
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        {/* dispatch increment action to redux */}
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        {/* dispatch decrement action to redux */}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementAsync(2))}>
          Increment 2 by Async{" "}
        </button>
      </div>
    </div>
  );
}

export default Counter;
