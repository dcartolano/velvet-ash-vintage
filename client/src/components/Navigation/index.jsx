import logo from '../../assets/vav-logo.png';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="50" height="50" className="d-inline-block align-center" alt=""></img>
                        Velvet Ash Vintage
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="/gallery">Gallery</a>
                        <a className="nav-item nav-link" href="/shop">Shop</a>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;