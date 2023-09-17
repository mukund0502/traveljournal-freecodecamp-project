function Cards(props) {
    return(
        <div>
            <section className="cards--section">
            <img src={props.image} alt="" width={300} className="cards--image"/>
            <div className="cards--text">
                <div>
                    <span className="cards--country">{props.country}</span> <a href="" className="cards--text--child2">view on map</a>
                </div>
                <h1 className="cards--placename">{props.placename}</h1>
                <p className="cards--date">{props.startdate} - {props.enddate}</p>
                <p className="cards--discription">{props.discription}</p>
            </div>
            </section>
            

        </div>
    );
}
export default Cards;