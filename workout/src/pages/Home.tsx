import { useEffect } from 'react'
import axios from 'axios'
import Workout from './Workout'
import AddWorkout from '../components/AddWorkout'
import { useWorkoutsContext } from '../context/WorkoutContext'

const Home = () => {
  const { state, dispatch } = useWorkoutsContext()
  const { workouts } = state
  const url = 'http://localhost:4000'

  const fetchWorkouts = async () => {
    try {
      const { data } = await axios.get(`${url}/workouts`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch {
      ;(error: any) => {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout: any) => (
            <div key={workout._id}>
              <Workout workout={workout} />{' '}
            </div>
          ))}
      </div>

      <AddWorkout />
    </div>
  )
}

export default Home
