import { Link } from 'react-router-dom'
import styled from 'styled-components'

const styledLink = {
  textDecoration: 'none',
  fontFamily: 'Ubuntu',
  fontSize: '30px',
  color: '#fff',
}

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          {' '}
          <h2> Workout Buddy</h2>
        </Link>
      </div>
    </header>
  )
}

export default Navbar

const Nav = styled.div`
  margin: 0 auto;
  padding: 50px;
  background-color: #245269;
  display: flex;
  flex-grow: 1;
`
