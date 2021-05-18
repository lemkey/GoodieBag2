import axios from 'axios'


//action creator
const GET_CANDIES = 'GET_CANDIES'

export const getCandy = (candy) => ({
  type: GET_CANDIES,
  candy
})

export const fetchCandy = () => {
  return async (dispatch) => {
    try {
      const { data: candy } = await axios.get('/api/candies')
      dispatch(getCandy(candy))
    } catch (error) {
      console.log(error);
    }
  }
}

const initialState = {
  candy: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return action.candy
    default:
      return state
  }
}

export default rootReducer
