import express from 'express'

const workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getWorkouts = async (req: express.Request, res: express.Response) => {
  try {
    const workouts = await workout.find().sort({ createdAt: -1 })

    res.status(200).json(workouts)
  } catch {
    ;(error: any) => res.status(400).json({ error: error.message })
  }
}

const getWorkout = async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' })
  }

  if (!workout) {
    return res.status(404).json({ message: 'workout not found' })
  }
  try {
    const oneWorkout = await workout.findById(id)

    res.status(200).json(oneWorkout)
  } catch {
    ;(error: any) => res.status(400).json({ error: error.message })
  }
}

const createWorkout = async (req: express.Request, res: express.Response) => {
  const { workoutName, reps, sets, weight } = req.body
  let emptyFields = []
  if (!workoutName) emptyFields.push('workoutName')
  if (!reps) emptyFields.push('reps')
  if (!sets) emptyFields.push('sets')
  if (!weight) emptyFields.push('weight')

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({
        error: `${emptyFields.join(', ')} field is required`,
        emptyFields,
      })
  }

  try {
    const newWorkout = await workout.create({
      workoutName,
      reps,
      sets,
      weight,
    })

    res.status(200).json(newWorkout)
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}

const deleteWorkout = async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' })
  }
  if (!workout) {
    return res.status(404).json({ message: 'workout not found' })
  }

  try {
    const deletedWorkout = await workout.findByIdAndDelete({ _id: id })

    res.status(200).json(deletedWorkout)
  } catch {
    ;(error: any) => res.status(400).json({ error: error.message })
  }
}

const updateWorkout = async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' })
  }
  if (!workout) {
    return res.status(404).json({ message: 'workout not found' })
  }
  try {
    const updatedWorkout = await workout.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    )

    res.status(200).json(updatedWorkout)
  } catch {
    ;(error: any) => res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
}
