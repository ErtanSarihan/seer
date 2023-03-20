function Sidebar(props) {
  return (
    <div style={{backgroundColor: 'red', height: '100vh', width: 150}}>
      Sidebar
      <button onClick={props.modalOnClick}><h3>Search</h3></button>
    </div>
  )
}

export {Sidebar}