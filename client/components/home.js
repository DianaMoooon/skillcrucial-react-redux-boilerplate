import React from 'react'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-indigo-800 items-center justify-between flex-wrap p-6">
        <div className="text-white font-bold flex flex-shrink-0 mr-6">
      {}
      </div>
     </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
