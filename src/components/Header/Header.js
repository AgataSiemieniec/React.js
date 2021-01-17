import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from '../Header/Header.scss';
import Container from './../Container/Container.js';
import Icon from '../Icon/Icon.js';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='code' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink> 
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav> 
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
// Zauważ, w jaki sposób tworzymy linki w nawigacji w aplikacjach reactowych: zamiast HTML-owego tagu <a> stosujemy komponent <NavLink>. Jeżeli natomiast chcemy umieścić zwykły link w innym miejscu na stronie, użyjemy komponentu <Link>. W obu przypadkach zamiast atrybutu href użyjemy to do wskazania naszej aplikacji, gdzie dany link ma prowadzić.