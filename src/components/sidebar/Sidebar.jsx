
function Sidebar(props) {
    return (
        <div style={{backgroundColor: 'red', height: '100vh', width: 150}}>
            Sidebar
            <button onClick={props.modalOnClick}>Modal Button</button>
        </div>
    )
}

export {Sidebar}