import React, { useState } from "react"
import io from "socket.io-client"

import "./static/css/App.css"

const App = () => {
  const [ socket ] = useState( io( "http://192.168.1.253:8000" ) )
  const [ rotation, setRotation ] = useState( "" )

  socket.on( "SetRotation", deg => setRotation( deg ) )

  return (
    <div id = "App">
      <div id = "Scene" style = { { transform: `translate( ${ rotation } )` } }>
        <div id = "Text">
          <p>mayonnaise is not an instrument</p>
        </div>

        <div id = "RightSide" className = "Side" />
        <div id = "LeftSide" className = "Side" />
        <div id = "BackSide" className = "Side" />
        <div id = "Bottom" className = "Side" />
        <div id = "Top" className = "Side" />

        <div id = "Floor" />
      </div>
    </div>
  )
}

export default App