import React, { ReducerWithoutAction, useContext, useReducer } from 'react'
import { WorkoutsContextType } from '../@types/WorkoutType'
import { initialState, reducer } from '../reducer/reducer'

const WorkoutsContext = React.createContext<WorkoutsContextType | undefined>(
  undefined
)
WorkoutsContext.displayName = 'WorkoutsContext'

const WorkoutsContextProvided = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    reducer as ReducerWithoutAction<any>,
    initialState
  )

  const value = {
    state,
    dispatch,
  }

  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  )
}

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)
  if (context === undefined) {
    throw new Error(
      'useDrawerContext must be used within a DrawerContextProvider'
    )
  }
  return context
}

export { useWorkoutsContext, WorkoutsContextProvided }
