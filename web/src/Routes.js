// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin" page={AdminPage} name="admin" />
      <Route path="/catalog/{categoryId:Int}" page={CatalogPage} name="catalog" />
      <Route path="/items/new" page={NewItemPage} name="newItem" />
      <Route path="/items/{id:Int}/edit" page={EditItemPage} name="editItem" />
      <Route path="/items/{id:Int}" page={ItemPage} name="item" />
      <Route path="/items" page={ItemsPage} name="items" />
      <Route path="/images/new" page={NewImagePage} name="newImage" />
      <Route path="/images/{id:Int}/edit" page={EditImagePage} name="editImage" />
      <Route path="/images/{id:Int}" page={ImagePage} name="image" />
      <Route path="/images" page={ImagesPage} name="images" />
      <Route path="/categories/new" page={NewCategoryPage} name="newCategory" />
      <Route path="/categories/{id:Int}/edit" page={EditCategoryPage} name="editCategory" />
      <Route path="/categories/{id:Int}" page={CategoryPage} name="category" />
      <Route path="/categories" page={CategoriesPage} name="categories" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
