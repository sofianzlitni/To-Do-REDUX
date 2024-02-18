// importation

import {
  FAIL_TASK,
  LOAD_TASK,
  ONE_TASK,
  SUCC_TASK,
  DONE_TASK,
} from "../ActionsTypes/task";

// initialState
const initialState = {
  toggle: false,
  allTasks: [],
  errors: null,
  load: false,
  oneTask: {},
};

// pure function

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TASK:
      return { ...state, load: true };
    case SUCC_TASK:
      return { ...state, load: false, allTasks: payload.allTasks };
    case FAIL_TASK:
      return { ...state, load: false, errors: payload };
    case ONE_TASK:
      return { ...state, load: false, oneTask: payload.oneTask };
    default:
      return state;
    case DONE_TASK:
      return {
        ...state,
        load: false,
        allTasks: state.allTasks.map((el) =>
          el._id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
  }
};

export default taskReducer;
