import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
     <Header />
   <div className='main'>
   <div className='card-i'>
   <Card 
      img={items[0].imgURL}
      name={items[0].name}
      details={items[0].details}
      price={items[0].price}
   />

<Card 
      img={items[1].imgURL}
      name={items[1].name}
      details={items[1].details}
      price={items[1].price}
   />

<Card 
      img={items[2].imgURL}
      name={items[2].name}
      details={items[2].details}
      price={items[2].price}
   />

<Card 
      img={items[3].imgURL}
      name={items[3].name}
      details={items[3].details}
      price={items[3].price}
   />
   </div>
   </div>
    
   <Footer />
   </div>

     </div>
  );
}

export default App;
