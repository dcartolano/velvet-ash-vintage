import logo from '../../assets/vav-logo.png';

const Navigation = () => {
    return (
        <div>
            {/* <div class="pos-f-t"> */}

            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="50" height="50" className="d-inline-block align-center" alt=""></img>
                        Velvet Ash Vintage
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {/* <div className="bg-light p-4"> */}
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/shop">Shop</a>
                            </li>
                        </ul> */}
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="/gallery">Gallery</a>
                        <a className="nav-item nav-link" href="/shop">Shop</a>
                    {/* </div> */}
                </div>
            </nav>
            {/* </div> */}
        </div>
    );
}

export default Navigation;