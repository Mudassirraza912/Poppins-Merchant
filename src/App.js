import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store, persistore } from './stores'
import { enableScreens } from 'react-native-screens'
import { PersistGate } from 'redux-persist/integration/react'
enableScreens()

const App = () => {
  console.disableYellowBox = true
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
