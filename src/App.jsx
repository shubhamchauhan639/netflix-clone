import { useState } from 'react'

import viteLogo from '/vite.svg'
import Body from "./components/Body";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {


  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

export default App
