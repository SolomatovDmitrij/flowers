import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const categories = () => {
  return db.category.findMany()
}

export const category = ({ id }) => {
  return db.category.findOne({
    where: { id },
  })
}

export const createCategory = ({ input }) => {
  requireAuth()
  return db.category.create({
    data: input,
  })
}

export const updateCategory = ({ id, input }) => {
  requireAuth()
  return db.category.update({
    data: input,
    where: { id },
  })
}

export const deleteCategory = ({ id }) => {
  requireAuth()
  return db.category.delete({
    where: { id },
  })
}
