// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin" page={AdminPage} name="admin" />
      <Route path="/catalog/{categoryId:Int}" page={CatalogPage} name="catalog" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
      <Private unauthenticated="home">
        <Route path="/admin/items/new" page={NewItemPage} name="newItem" />
        <Route path="/admin/items/{id:Int}/edit" page={EditItemPage} name="editItem" />
        <Route path="/admin/items/{id:Int}" page={ItemPage} name="item" />
        <Route path="/admin/items" page={ItemsPage} name="items" />
        <Route path="/admin/images/new" page={NewImagePage} name="newImage" />
        <Route path="/admin/images/{id:Int}/edit" page={EditImagePage} name="editImage" />
        <Route path="/admin/images/{id:Int}" page={ImagePage} name="image" />
        <Route path="/admin/images" page={ImagesPage} name="images" />
        <Route path="/admin/categories/new" page={NewCategoryPage} name="newCategory" />
        <Route path="/admin/categories/{id:Int}/edit" page={EditCategoryPage} name="editCategory" />
        <Route path="/admin/categories/{id:Int}" page={CategoryPage} name="category" />
        <Route path="/admin/categories" page={CategoriesPage} name="categories" />
      </Private>
    </Router>
  )
}

export default Routes
