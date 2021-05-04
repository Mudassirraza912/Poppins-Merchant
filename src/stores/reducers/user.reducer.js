const initialState = {
  user : null,
  isLoading: false,
  resetPassToken: '',
  userId: null,
  authToken: null,
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: payload,
        userId: payload.payload.id,
        authToken: payload.payload.auth_token,
        isLoading: false
      }
      case 'UPDATED_PROFILE_SUCCESS':
        return {
          ...state,
          user: payload,
          isLoading: false
        }
    case 'ERROR':
      return {
        ...state,
        isLoading: false
      }
    case 'FETCHED_RESET_PASS_TOKEN':
        return {
          ...state,
          isLoading: false,
          resetPassToken: payload
        }
    case 'LOGOUT_REQUEST' : 
      return {
        state: initialState
      }
    default:
      return state
  }
}

export default userReducer
