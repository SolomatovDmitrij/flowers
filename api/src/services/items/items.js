import { db } from 'src/lib/db'

export const items = () => {
  return db.item.findMany({
      include: {
          category: true
      }
  })
}

export const item = ({ id }) => {
  return db.item.findOne({
    where: { id },
  })
}

export const createItem = ({ input }) => {
    const { categoryId, ...localFields } = input
    const data = {
        ...localFields,
        category: { connect: { id: categoryId } }
    }
  return db.item.create({
      data
  })
}

export const updateItem = ({ id, input }) => {
    const { categoryId, ...localFields } = input
    const data = {
        ...localFields,
        category: { connect: { id: categoryId } }
    }
  return db.item.update({
    data,
    where: { id },
  })
}

export const deleteItem = ({ id }) => {
  return db.item.delete({
    where: { id },
  })
}

export const Item = {
}
