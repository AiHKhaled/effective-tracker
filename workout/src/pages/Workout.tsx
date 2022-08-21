import React from 'react'
import styled from 'styled-components'
import '../index.css'
export type WorkoutProps = {
  workout: {
    _id: string
    workoutName: string
    reps: number | string
    sets: number | string
    weight: number | string
    createdAt: string
  }
}

const Workout: React.FC<WorkoutProps> = ({ workout }: WorkoutProps) => {
  const { _id, workoutName, reps, sets, weight, createdAt } = { ...workout }
  return (
    <>
      <div className="workout-details">
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

        <span> {createdAt} </span>
      </div>
    </>
  )
}

export default Workout

const Card = styled.div`
  /* font-family: "open sans", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 20px;
  min-width: 300px;
  height: auto;
  background-color: #fff;
  color: #000;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
`
