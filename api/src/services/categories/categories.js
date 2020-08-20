import { db } from 'src/lib/db'

export const categories = () => {
  return db.category.findMany()
}
/*
export const categories_plus_selected = ({selected_id}) => {
  const data = { categories: db.category.findMany(), selected_id: selected_id }
  console.log(JSON.stringify(data))
  return data
}
*/

export const category = ({ id }) => {
  return db.category.findOne({
    where: { id },
  })
}

export const createCategory = ({ input }) => {
  return db.category.create({
    data: input,
  })
}

export const updateCategory = ({ id, input }) => {
  return db.category.update({
    data: input,
    where: { id },
  })
}

export const deleteCategory = ({ id }) => {
  return db.category.delete({
    where: { id },
  })
}
