import { db } from 'src/lib/db'

export const images = () => {
  return db.image.findMany()
}

export const imageItems = (itemId) => {
  return db.image.findMany(
    where: { itemId }
  )
}

export const image = ({ id }) => {
  return db.image.findOne({
    where: { id },
  })
}

export const createImage = ({ input }) => {
  return db.image.create({
    data: input,
  })
}

export const updateImage = ({ id, input }) => {
  return db.image.update({
    data: input,
    where: { id },
  })
}

export const deleteImage = ({ id }) => {
  return db.image.delete({
    where: { id },
  })
}
