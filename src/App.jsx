import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      img: "/imgs/imgs2.png",
      titel: "Burger",
      piric: 3.22,
    },
    {
      img: "/imgs/gamburger2.png",
      titel: "Gamburger",
      piric: 4.39,
    },
    {
      img: "/imgs/gamburger3.png",
      titel: "Gamburger",
      piric: 4.12,
    },
  ]);

  const [main_img, setMainImg] = useState(data[0].img);

  return (
    <>
      <div className="bac_imgss">
        <header>
          <div className="nav">
            <div className="container">
              <div className="logo">
                <div className="logo_box">
                  <img src="/imgs/logo 1.png" alt="Logo" />
                  <ul>
                    <li>
                      <a href="">Home</a>
                      <a href="">Service</a>
                      <a href="">Menu</a>
                      <a href="">Shop</a>
                    </li>
                  </ul>
                  <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <div className="shoping">
                      <span>1</span>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
                <div className="user">
                  <div className="user1">
                    <i className="fa-solid fa-user-plus"></i>
                    <span>Sign In</span>
                  </div>
                  <div className="user1">
                    <i className="fa-solid fa-user-plus"></i>
                    <span>Sign Up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero">
            <div className="container">
              <div className="block">
                <div className="titel">
                  <h1>
                    Order your <span>favourite foods</span>
                  </h1>
                  <p>{data.find((item) => item.img === main_img)?.titel}</p>
                  <h2>
                    Total price: $
                    {data.find((item) => item.img === main_img)?.piric}
                  </h2>
                </div>

                <div className="imgs">
                  <img src={main_img} alt="Selected Food" />
                </div>
              </div>

              <div className="cards">
                {data.map((item, i) => (
                  <div
                    key={i}
                    className="card"
                    onClick={() => {
                      setMainImg(item.img);
                    }}
                  >
                    <img src={item.img} alt="Food Item" />
                    <h4>{item.titel}</h4>
                    <p>${item.piric}</p>
                  </div>
                ))}

                <div className="rigth_left">
                  <div className="left">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                  <div className="rigth">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}


export default App;
