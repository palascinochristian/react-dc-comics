import links from "../components/Data/headerLinks";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <img className="img-fluid" src="/imgs/dc-logo.png" />
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
