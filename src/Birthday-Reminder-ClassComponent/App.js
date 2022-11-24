import React from 'react'
import Data from './Data'
import Fai from './Images/Faiz-Pic.jpeg'

const MyContextData = React.createContext()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Data }
  }
  render() {
    return (
      <>
        <MyContextData.Provider value={Data}>
          <Lists />
        </MyContextData.Provider>
      </>
    )
  }
}
export default App

class Lists extends React.Component {
  static contextType = MyContextData
  render() {
    return (
      <>
        {this.context.map((a) => {
          const { id, name, age, image } = a
          return (
            <article key={id} className='person'>
              <img src={image ? image : Fai} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })}
      </>
    )
  }
}
