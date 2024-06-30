import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <div className='App main-layout h-screen flex justify-center items-center flex-col gap-5'>
          <Header />
          <Tasks />
        </div>
      </Provider>
    </>
  )
}

export default App