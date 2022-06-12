import './FeedHistories.css'

function FeedHistories() {
    const histories = [
		{username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
		{username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
		{username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
		{username:"rajoiii",img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"},
		{username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
		{username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"}
	]

	const show = histories.map((element, i) =>{
		return(
			<div key={i} className="histories__item">
				<div className='histories__deco'>
					<img className='histories__img' src={element.img} alt={element.username}/>
				</div>
				<p>{element.username}</p>
			</div>
		)
	})
  	return (
    	<div className="FeedHistories">
			{show}
    	</div>
  	)
}

export default FeedHistories