import { db } from 'src/lib/db'

export const images = () => {
  return db.image.findMany({
      include: { item: true }
  })
}

export const imageEmptyItems = ({exclude, connect}) => {
  return db.image.findMany(
      {
        where: {
          OR: [
            {
              AND: [
                {item: null},
                {NOT: {id: {in: exclude}}},
              ]
            },
            { id: {in: connect} }
          ]
        },
        include: { item: true }
      },
  )
}

export const imageItems = ({itemId, exclude, connect}) => {
  return db.image.findMany(
      {
        where: { 
          OR: [
            {
              AND: [
               {item: {id: itemId}},
               {NOT: { id: { in: exclude }}}
            ]},
            {
              id: { in: connect }
            }
          ]
        }, 
        include: {item: true}
      },
  )
}

export const image = ({ id }) => {
  return db.image.findOne({
    include: {item: true},
    where: { id },
  })
}

export const createImage = ({ input }) => {
  return db.image.create({
    data: {
        url:    input.url,
        item: {}
    },
  })
}

export const updateImage = ({ id, input }) => {
    const { itemId, ...localVar } = input
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
