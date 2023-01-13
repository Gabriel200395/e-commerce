import "./styles.css";
import tenis from "../../assets/img/produto_one.png";
import Steps from "../steps";
import { useEffect, useState } from "react";

export default function Cart() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      let container = document.querySelector("#root") as HTMLDivElement;
      container.classList.add("modal");
    }
  }, [modal]);

  return (
    <div className="container-cart">
      <div className="cart-header-product">Nike Airmax 270 React</div>
      <div className="cart-products">
        <table border={0} cellSpacing={0}>
          <thead>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>UNIT PRICE</th>
          </thead>
          <tbody>
            <tr className="border">
              <td>
                <div className="cart-item-product">
                  <button>
                    <svg
                      width="10"
                      height="9"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.62438 0.739013L8.86523 0.0319061L0.514619 7.81008L1.27377 8.51719L9.62438 0.739013Z"
                        fill="#FF4252"
                      />
                      <path
                        d="M8.86488 8.51701L9.62402 7.80991L1.27341 0.0317315L0.514261 0.738838L8.86488 8.51701Z"
                        fill="#FF4252"
                      />
                    </svg>
                  </button>
                  <div className="img-product">
                    <img src={tenis} alt={tenis} />
                  </div>

                  <p>Nike Airmax 270 react</p>
                </div>
              </td>
              <td>$9981</td>
              <td>
                <div className="cart-amount">
                  <button>-</button>
                  <p>2</p>
                  <button>+</button>
                </div>
              </td>
              <td>$499</td>
            </tr>
            <tr className="border">
              <td>
                <div className="cart-item-product">
                  <button>
                    <svg
                      width="10"
                      height="9"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.62438 0.739013L8.86523 0.0319061L0.514619 7.81008L1.27377 8.51719L9.62438 0.739013Z"
                        fill="#FF4252"
                      />
                      <path
                        d="M8.86488 8.51701L9.62402 7.80991L1.27341 0.0317315L0.514261 0.738838L8.86488 8.51701Z"
                        fill="#FF4252"
                      />
                    </svg>
                  </button>{" "}
                  <div className="img-product">
                    <img src={tenis} alt={tenis} />
                  </div>
                  <p>Nike Airmax 270 react</p>
                </div>
              </td>
              <td>$9981</td>
              <td>
                <div className="cart-amount">
                  <button>-</button>
                  <p>2</p>
                  <button>+</button>
                </div>
              </td>
              <td>$499</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-payment-container">
        <div className="cart-payment">
          <div className="cart-payment-text">
            <p>Subtotal</p>
            <p>$998</p>
          </div>
          <div className="cart-payment-total-text">
            <p>TOTAL</p>
            <p>$118</p>
          </div>
          <button onClick={() => setModal(true)}>Check out</button>
        </div>
      </div>

      {modal && <Steps />}
    </div>
  );
}
