import './AsideSuggestions.css'

function AsideSuggestions({arr}) {
    console.log(arr);
    const result = arr.map((element,i) =>{
        return(
            <div key={i} className="Suggestions__item">
                <img src={element.img} alt={element.username} />
                <div className="Suggestions__info">
                    <h3>{element.username}</h3>
                    <p>{element.common} y {element.more} más siguen esta cuenta</p>
                </div>
                <p className='Suggestions__link'>Seguir</p>
            </div>
        )
    })
  return (
    <div className="AsideSuggestions">
        <div className="AsideSuggestions__header">
            <h3>Sugerencias para ti</h3>
            <p>Ver Todo</p>
        </div>
        {result}
    </div>
  )
}

export default AsideSuggestions