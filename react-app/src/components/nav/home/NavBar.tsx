

interface Props{
    appName : String
    imgLink : string
}


export default function HomeNavBar({appName, imgLink} : Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="d-flex w-100 justify-content-between collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-between align-items-center">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <img src={imgLink} className="d-inline-block align-top" width="60" height="60" alt=""/>
              </a>
            </li>
            <li className="nav-item">
              <h4 className="">
                {appName}
              </h4>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

