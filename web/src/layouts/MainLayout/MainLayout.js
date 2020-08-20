import { Link, routes } from '@redwoodjs/router'
import FlowerCategoriesCell from 'src/components/cells/FlowerCategoriesCell'

const MainLayout = ({ children }) => {
  return (
      <div>
          <h1>
              <Link to={routes.home()}>Flowers</Link>
          </h1>
          <nav>
                <FlowerCategoriesCell />
          </nav>
          <main>{children}</main>
      </div>
    )
}

export default MainLayout
