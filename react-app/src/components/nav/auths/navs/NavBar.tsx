

interface Props{
    appName : String
    imgLink : string
}


export default function AuthNavBar({appName, imgLink} : Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="d-flex w-100 justify-content-between collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-center align-items-center">
            <li className="nav-item">
              <h4 className="">
                {appName}
              </h4>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

