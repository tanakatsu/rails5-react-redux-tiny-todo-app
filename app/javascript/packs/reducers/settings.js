const settings = (state = { enabled: true }, action) => {
  switch (action.type) {
    case 'UI_ENABLE':
      return { enabled: true }
    case 'UI_DISABLE':
      return { enabled: false }
    default:
      return state
  }
}

export default settings
