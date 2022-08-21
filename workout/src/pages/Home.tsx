import React, { useEffect, useState } from 'react'
import Container from '../Layout/container'
import axios from 'axios'
import Workout, { WorkoutProps } from './Workout'
import AddWorkout from '../components/AddWorkout'

const Home = () => {
  const [workouts, setWorkouts] = useState<any>([])
  const url = 'http://localhost:4000'

  const fetchWorkouts = async () => {
    try {
      const { data } = await axios.get(`${url}/workouts`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      setWorkouts(data)
    } catch {
      ;(error: any) => {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout: any) => (
            <div>
              <Workout workout={workout} />{' '}
            </div>
          ))}
      </div>

      <AddWorkout />
    </div>
  )
}

export default Home
