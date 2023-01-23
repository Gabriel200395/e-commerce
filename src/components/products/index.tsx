import { useState } from "react";
import "./styles.css";
import { stockProducts } from "../../helpers";
export default function Products() {
  const [keyProduct, setKeyProduct] = useState("allProducts");

  function handleClickKeyProduct(key: string) {
    setKeyProduct(key);
  }

  return (
    <div className="products-container">
      <h3>Mais Vendidos</h3>
      <div className="products-container-buttons">
        <button
          className={`${keyProduct === "allProducts" && "active"}`}
          onClick={() => handleClickKeyProduct("allProducts")}
        >
          Todos
        </button>
        <button
          className={`${keyProduct === "tshirts" && "active"}`}
          onClick={() => handleClickKeyProduct("tshirts")}
        >
          Camisetas
        </button>
        <button
          className={`${keyProduct === "shorts" && "active"}`}
          onClick={() => handleClickKeyProduct("shorts")}
        >
          Bermudas{" "}
        </button>
        <button
          className={`${keyProduct === "tennis" && "active"}`}
          onClick={() => handleClickKeyProduct("tennis")}
        >
          Tênis
        </button>
        <button
          className={`${keyProduct === "clasps" && "active"}`}
          onClick={() => handleClickKeyProduct("clasps")}
        >
          Polchetes
        </button>
      </div>
      <div className="products-cards">
        {stockProducts[keyProduct].products.map(
          ({ name, price, link }, index) => {
            return (
              <div className="card-item" key={index}>
                <img src={link} alt={link} />
                <div className="card-text">
                  <h4>{name}</h4>
                  <span>
                    {price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <div className="add-cart-buttons">
                  <button>
                    Add Cart
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.129 11.3337C13.5901 11.3329 14.0368 11.1722 14.3927 10.879C14.7487 10.5858 14.9919 10.1782 15.081 9.72577L16.081 4.72577C16.1389 4.43597 16.1319 4.13692 16.0604 3.85016C15.989 3.5634 15.8548 3.29605 15.6677 3.06732C15.4806 2.83859 15.2451 2.65412 14.9782 2.52728C14.7112 2.40044 14.4195 2.33436 14.124 2.33374H4.16799V1.33374C4.16799 1.06852 4.06262 0.814184 3.87508 0.626648C3.68754 0.439112 3.4332 0.33374 3.16799 0.33374H1.17699C0.911773 0.33374 0.657403 0.439112 0.469866 0.626648C0.28233 0.814184 0.176989 1.06852 0.176989 1.33374C0.176989 1.59896 0.28233 1.8533 0.469866 2.04083C0.657403 2.22837 0.911773 2.33374 1.17699 2.33374H2.17699V12.3337C1.78105 12.332 1.39348 12.4478 1.0634 12.6664C0.733323 12.8851 0.475558 13.1968 0.322802 13.5621C0.170046 13.9274 0.129158 14.3298 0.205309 14.7184C0.28146 15.1069 0.471224 15.4641 0.750567 15.7448C1.02991 16.0254 1.38626 16.2167 1.77446 16.2946C2.16267 16.3725 2.56528 16.3335 2.93126 16.1824C3.29724 16.0313 3.61012 15.7749 3.83028 15.4458C4.05044 15.1167 4.16798 14.7297 4.16799 14.3337H11.137C11.1386 14.7274 11.2567 15.1117 11.4766 15.4382C11.6964 15.7648 12.0081 16.0189 12.3722 16.1684C12.7363 16.3179 13.1366 16.3563 13.5225 16.2785C13.9084 16.2007 14.2625 16.0103 14.5403 15.7314C14.8181 15.4525 15.0071 15.0976 15.0833 14.7114C15.1595 14.3252 15.1196 13.9251 14.9686 13.5616C14.8176 13.1981 14.5623 12.8874 14.2349 12.6689C13.9074 12.4504 13.5226 12.3337 13.129 12.3337H4.16799V11.3337H13.129ZM14.129 4.33374L13.129 9.33374H4.16799V4.33374H14.124H14.129Z"
                        fill="#33A0FF"
                      />
                    </svg>
                  </button>
                  <button>
                    <i className="far fa-thin fa-heart"></i>
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
      {/*       <button className="button-more">Ver Mais</button>
       */}{" "}
    </div>
  );
}
