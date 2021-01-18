import React from 'react';

function App() {
  return <div>
    <Folder name="Desktop" />
    <Folder name="Applications" />
    <File name="dogs.jpeg" />
  </div>
}

const Folder = (props) => {
  return <h4>{props.name}</h4>
}

const File = (props) => {
  return <h5>{props.name}</h5>
}
export default App;