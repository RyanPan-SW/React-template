import { INCREMENT, DECREMRNT, RESET } from "actions/counter";

/**
 * 初始化state
 */

const initState = {
  count: 0
};

/**
 * reducer
 */

export default function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMRNT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}
