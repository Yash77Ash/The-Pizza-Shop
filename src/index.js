import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 450,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 500,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 550,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 350,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 250,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 650,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header className="header">
        <h1>The Pizza Shop</h1>
      </header>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas=[];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      {numPizzas > 0 ? (
        <>
          <h2>Our Menus</h2>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          We are still working on our menu. Please come back later!!
        </p>
      )}
    </main>
  );
}

function Pizza(props) {
  return (  
  <li className={`pizza ${props.pizzaObj.soldOut?"sold-out":""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>₹ {props.pizzaObj.soldOut ? "Sold out": props.pizzaObj.price} /-</span>
        <br />
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We are Open");
  // else alert("We are close");

  return (
    <footer className="footer">
      {isOpen ? (
       <Order closeHour={closeHour} openHour={openHour}/>
      ):(
        <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>
      )}
    </footer>
  );
}
  
function Order({closeHour,openHour}){
  return(
    <div className="order">
    <p>We are Open from {openHour}:00 to Until {closeHour}:00 come visit or order online</p>
    <button className="btn">Order now</button>
  </div>
  );

}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
