import './burger.scss';

export default function Burger({ menuOpen, setMenuOpen }) {
  return (
    <div className={'burger ' + (menuOpen && 'active')}>
      <ul>
        <li>
          <a href='#intro'>Home</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}
