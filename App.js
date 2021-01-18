import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Folder name="Desktop">
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
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}><i className="folder icon"></i></span>
    {name}
    <div style={{ marginLeft: '15px' }}>
      {isOpen ? children : null}
    </div>
  </div>
}

const File = (props) => {
  return <div>{props.name}</div>
}
export default App;