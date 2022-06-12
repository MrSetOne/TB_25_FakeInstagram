import './MainPosts.css'

function MainPosts() {
    const posts = [
        {
            user:{                
                username: "abaski",
                img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png",
            },
            title: "Los embidiosos diran kes fotosop",
            img: "https://estaticos-cdn.elperiodico.com/clip/aa9939a3-704c-4c04-a4be-5e7b0514b390_media-libre-aspect-ratio_default_0.jpg",
            comments: 20,
            time: 10,
            likes: [
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
                {username:"rajoiii",img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username:"coletas",img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"},
            ]
        },
        {
            user:{
                username:"rajoiii",
                img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"  
            },
            title: "100pre Cductor",
            img: "https://www.laverdad.es/multimedia/201512/03/media/Mariano%20Rajoy%20y%20Bert%C3%ADn%20Osborne/marianorajoybertin%20(7)--1154x900.jpg",
            comments: 2,
            time: 12,
            likes:[
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},        
            ]
        },
        {
            user:{
                username:"coletas",
                img:"https://dondiario.com/images/2020/08/06/1596695486.jpg"
            },
            title: "Ahora si que si...",
            img:"https://okdiario.com/img/2018/05/17/pablo-gil-ok.png",
            comments: 69,
            time: 19,
            likes:[
                {username: "ersanti",img:"https://es.web.img3.acsta.net/pictures/17/08/09/11/09/474539.jpg"},
                {username: "abaski",img:"https://www.elplural.com/uploads/s1/88/33/99/montaje-de-santiago-abascal-desde-el-atril-del-congreso.png"},
                {username:"rajoiii",img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username:"rajoiii",img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username:"rajoiii",img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"},
                {username:"rajoiii",img:"https://okdiario.com/img/2017/07/26/mariano-rajoy-meme-655x368.jpg"},
                {username:"tomateh",img:"https://i.ytimg.com/vi/XEAupg1I8lI/0.jpg"},
                {username:"pedrito",img:"https://www.marketingdirecto.com/wp-content/uploads/2019/02/pedro-sanchez.jpg"}                                
            ]
        }
    ];
    const prints = posts.map((element,i)=>{
        return(
            <div key={i} className="post">
                <div className="post__header">
                    <div className='postHeader__porfile'>
                        <img src={element.user.img} alt={element.user.username} />
                        <h3>{element.user.username}</h3>
                    </div>
                    <svg aria-label="Más opciones" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
                <img className='post__image' src={element.img} alt={element.user.username} />
                <div className='post__subinfo'>
                    <div className='post__interactions'>
                        <div className='post__interaction--menu'>
                            <svg aria-label="Me gusta" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                            <svg aria-label="Comentar" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            <svg aria-label="Compartir publicación" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                        <svg aria-label="Guardar" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                    <div className='post__likes'>
                        <div className='postLikes__imgs'>
                            <img src={element.likes[0].img} alt={element.likes[0].username} />
                            <img src={element.likes[1].img} alt={element.likes[1].username} />
                            <img src={element.likes[2].img} alt={element.likes[2].username} />
                        </div>
                        <p>Les gusta a <span>{element.likes[0].username}</span> y <span>{element.likes.length} personas más</span></p>
                    </div>
                    <p className='post__title'><span>{element.user.username}</span> {element.title}</p>
                    <p className='post__comments'>Ver los {element.comments} cómentarios</p>
                    <p className='post__time'>HACE {element.time} HORAS</p>
                </div>
            </div>
        )
    })
  return (
    <div className="MainPosts">
        {prints}
    </div>
  )
}

export default MainPosts