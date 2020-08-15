import { db } from 'src/lib/db'

export const images = () => {
  return db.image.findMany()
}

export const imageItems = (itemId) => {
  return db.image.findMany(
      {
        where: { itemId: itemId }
      }
  )
}

export const image = ({ id }) => {
  return db.image.findOne({
    where: { id },
  })
}

export const createImage = ({ input }) => {
  return db.image.create({
    data: {
        title:  input.title,
        url:    input.url,
        item: {}
    },
  })
}

export const updateImage = ({ id, input }) => {
    const { itemId, ...localVar } = input
    console.log('input', JSON.stringify(input))
    console.log('localVar', JSON.stringify(localVar))
    console.log('itemId', itemId)
  return db.image.update({
      data: { ...localVar, item: { connect: { id: itemId } }},
    where: { id },
  })
}

export const deleteImage = ({ id }) => {
  return db.image.delete({
    where: { id },
  })
}
