import { db } from 'src/lib/db'

export const items = () => {
  return db.item.findMany({
      include: {
          category: true,
          images: true
      }
  })
}

export const item = ({ id }) => {
  return db.item.findOne({
    where: { id },
      include: {
          category: true,
          images: true
      }
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
    const { categoryId, connect_img, disconnect_img, ...localFields } = input
    const data = {
        ...localFields,
        category: { connect: { id: categoryId } },
        images: {
          connect: connect_img,
          disconnect: disconnect_img,
        },
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

export const items_by_category = ({ categoryId }) => {
    return db.item.findMany({
            where: {
                category:  { id: categoryId }
            },
            include: {
                images: true
            }
        })
}
