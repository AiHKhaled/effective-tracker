import { Dispatch } from 'react'
import { WorkoutProps } from '../pages/Workout'
import { ReducerActionType } from '../reducer/reducer'

export type WorkoutsProps = {
  workouts?: WorkoutProps[] | null
}

export type WorkoutsContextType = {
  state: WorkoutsProps

  dispatch: Dispatch<ReducerActionType>
}
