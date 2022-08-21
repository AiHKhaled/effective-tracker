import { WorkoutProps } from '../pages/Workout'

export type ReducerActionType = {
  type?: string
  payload?: WorkoutProps['workout'] | null
}
export const initialState = {
  workouts: [],

  dispatch: () => {},
}

export const reducer = (state = initialState, action: ReducerActionType) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        workouts: action.payload,
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      }
    case 'REMOVE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout: WorkoutProps['workout']) =>
            workout._id !== action!.payload!._id
        ),
      }

    default:
      return state
  }
}
