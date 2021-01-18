import React from 'react';

function App() {
  return (
    <div>
      <Folder name="Desktop" isOpen={true}>
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="express_file.mp4" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.jpeg" />
      </Folder>
      <Folder name="Applications" />

    </div>
  )
}

const Folder = (props) => {
  // const borderStyle = { border: '2px solid blue' };
  console.log(props)
  return <div>
    {props.name}
    <div style={{ marginLeft: '15px' }}>
      {props.isOpen ? props.children : null}
    </div>
  </div>
}

const File = (props) => {
  return <div>{props.name}</div>
}
export default App;