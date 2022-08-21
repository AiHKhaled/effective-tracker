import axios from 'axios'
import React from 'react'
import { useWorkoutsContext } from '../context/WorkoutContext'
import { formatDistanceToNow } from 'date-fns'
import '../index.css'
export type WorkoutProps = {
  workout: {
    _id: string
    workoutName: string
    reps: number | string
    sets: number | string
    weight: number | string
    createdAt?: any
  }
}

const Workout: React.FC<WorkoutProps> = ({ workout }: WorkoutProps) => {
  const { dispatch } = useWorkoutsContext()
  const { _id, workoutName, reps, sets, weight, createdAt } = { ...workout }

  const handleClick = async () => {
    const { data } = await axios.delete(`http://localhost:4000/workouts/${_id}`)
    dispatch({ type: 'REMOVE_WORKOUT', payload: data })
  }
  return (
    <>
      <div key={_id} className="workout-details">
        <h4> {workoutName}</h4>

        <p>
          <strong> Load:</strong> {weight}
        </p>

        <p>
          <strong> sets:</strong> {sets}
        </p>

        <p>
          <strong> reps:</strong> {reps}
        </p>
        <p className="date">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}{' '}
        </p>
        <span className="material-symbols-rounded" onClick={handleClick}>
          delete
        </span>
      </div>
    </>
  )
}

export default Workout
