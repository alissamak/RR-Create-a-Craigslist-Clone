const liStyle = {
    'display' : 'inline',
    'margin' : '2px',
    'padding' : '1px',
    'border' : '1px solid black'
}

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <h3>Listing</h3>
            <div>
                <ul>
                    <li style={liStyle}>all</li>
                    <li style={liStyle}>owner</li>
                    <li style={liStyle}>dealer</li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;