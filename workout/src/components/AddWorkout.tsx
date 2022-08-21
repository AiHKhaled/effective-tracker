import axios from 'axios'
import React, { useState } from 'react'
import { useWorkoutsContext } from '../context/WorkoutContext'

const AddWorkout = () => {
  const { dispatch } = useWorkoutsContext()
  const [workoutName, setWorkoutName] = useState<string>('')
  const [reps, setReps] = useState<number | string>('')
  const [weight, setWeight] = useState<number | string>('')
  const [sets, setSets] = useState<number | string>('')
  const [error, setError] = useState(null)
  const [empty, setEmpty] = useState<string[]>([])

  const url = 'http://localhost:4000/workouts'
  const workout = { workoutName, reps, weight, sets }
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(url, workout, headers)
      setError(null)
      setWorkoutName('')
      setReps('')
      setSets('')
      setWeight('')
      setEmpty([])
      dispatch({ type: 'CREATE_WORKOUT', payload: data })
    } catch (error: any) {
      const errorMessage = error.response.data
      setError(errorMessage.error)

      setEmpty(errorMessage.emptyFields)
    }
  }

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title</label>
      <input
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        className={empty.includes('workoutName') ? 'error' : ''}
      />

      <label>Weight</label>
      <input
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className={empty.includes('weight') ? 'error' : ''}
      />
      <label>Reps</label>
      <input
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={empty.includes('reps') ? 'error' : ''}
      />
      <label>Sets</label>
      <input
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className={empty.includes('sets') ? 'error' : ''}
      />
      <button>add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default AddWorkout
