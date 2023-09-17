import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Cards from './components/cards'
import listofplace from './components/details';



console.log(listofplace);
const updatedcards = listofplace.map((temp)=>{
  return <Cards 
    image = {temp.image}
    country = {temp.country}
    viewonmap = {temp.viewonmap}
    placename = {temp.placename}
    startdate = {temp.startdate}
    enddate = {temp.enddate}
    discription = {temp.discription}

  />
})


function App() {
  return (
    <div>
      <Header />
      {updatedcards}
      {/* <Cards 
        image = "https://source.unsplash.com/WLxQvbMyfas"
        country = "Japan"
        viewonmap = {true}
        placename = "Mount Fusi"
        startdate = "1 Jan, 2021"
        enddate = "12 Feb, 2021"
        discription = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      
      />
      <Cards 
        image = "https://source.unsplash.com/JmuyB_LibRo"
        country = "Australia"
        viewonmap = {true}
        placename = "Sydney Opera House"
        startdate = "27 May, 2021"
        enddate = "8 Jun, 2021"
        discription = "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      />
      <Cards 
        image = "https://source.unsplash.com/3PeSjpLVtLg"
        country = "Norway"
        viewonmap = {true}
        placename = "Geirangerfjord"
        startdate = "1 Oct, 2021"
        enddate = "18 Nov, 2021"
        discription = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      /> */}
      <Footer />
    </div>
  );
}

export default App;
