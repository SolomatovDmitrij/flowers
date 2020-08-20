import 'src/components/CatalogItem/CatalogItem.css'

const CatalogItem = ({item}) => {
  return (
    <div className="catalog-item">
      <img src={item?.images[0]?.url} alt="Load" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p> <span>Высота: </span>
          <span>{item.size_h}</span> </p>
      <p> <span>Ширина: </span>
          <span>{item.size_w}</span> </p>
      <p> <span>Цена: </span>
          <span>{item.price}</span> </p>
    </div>
  )
}

export default CatalogItem
