import './burger.scss';

export default function Burger({ menuOpen, setMenuOpen }) {
  return (
    <div className={'burger ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() =>setMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() =>setMenuOpen(false)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() =>setMenuOpen(false)}>
          <a href='#resume'>Resume</a>
        </li>
        <li onClick={() =>setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}
