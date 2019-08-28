import Link from 'next/link'

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
   aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="container">
    <a className="navbar-brand" href="#"></a>
      <div className="collapse navbar-collapse">
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link href="/">
        <a className="nav-link" title="Home ">Home </a>
        </Link>
      </li>

      <li className="nav-item">
      <Link href="User?name=Mango" as="User/Mango">
       
        <a className="nav-link">User </a>
        </Link>
      </li>
     
      <li className="nav-item">
        <Link href="/about">
        <a className="nav-link" >About</a></Link>
      </li>
    </ul>
      </div>
      </div>
</nav>
);

export default Navbar;