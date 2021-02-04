const initialState = {
    sortBy:"pupular",
    category:0
}
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'ДОБАВИТЬ':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }
  const filters = (state, action) => {



  }