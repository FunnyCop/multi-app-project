import React from "react"

import "./static/css/App.css"

const App = () => {
  return (
    <div id = "App">
      <div id = "Scene">
        <div id = "Text">
          <p>mayonnaise is not an instrument</p>
        </div>

        <div id = "RightSide" className = "Side"></div>
        <div id = "LeftSide" className = "Side"></div>
        <div id = "BackSide" className = "Side"></div>
        <div id = "Bottom" className = "Side"></div>
        <div id = "Top" className = "Side"></div>

        <div id = "Floor"></div>
      </div>
    </div>
  )
}

export default App