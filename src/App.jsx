import './App.css'

import Random  from './components/Random'
import Tag from './components/Tag'
function App() {


  return (
<div className='min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4'>
  <h1 className='bg-white rounded-lg w-full max-w-4xl text-center shadow-md py-3 text-3xl font-bold mb-8'>
    RANDOM GIF GENERATOR
  </h1>
  
  <div className='flex flex-col lg:flex-row justify-center gap-8 w-full max-w-6xl'>
    <div className=' w-full lg:w-1/2'>
      <Random />
    </div>
    
    <div className=' w-full lg:w-1/2'>
      <Tag />
    </div>
  </div>
</div>
  )
}

export default App
