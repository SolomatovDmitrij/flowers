import { Link, routes } from '@redwoodjs/router'
import FlowerCategoriesCell from 'src/components/cells/FlowerCategoriesCell'
import { useAuth } from '@redwoodjs/auth'

const MainLayout = ({ children }) => {
  const { logIn } = useAuth()

  return (
      <div>
          <h1>
              <Link to={routes.home()}>Flowers</Link>
          </h1>
          <nav>
                <FlowerCategoriesCell />
          </nav>
          <main>{children}</main>
          <div>
            <a href="#" onClick={logIn}>
              Вход
            </a>
          </div>
      </div>
    )
}

export default MainLayout
