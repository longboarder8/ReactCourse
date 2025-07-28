function Navbar() {
    return (
        <>
        {
        // <nav> <nav/> as follows was copied from bootstrap5.html file
        // all occurrences of "class" was changed to "className"
        <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
            </li>
            </ul>
        </div>
        </nav>
        }
</>
    )
}

export default Navbar; // this allows the Navbar function to be exported to App.jsx