import credit from "../../assets/icons/credit.png";
import paypal from "../../assets/icons/paypal.png";
import bank from "../../assets/icons/bank.png";
import sucess from "../../assets/icons/sucess.png";

import "./styles.css";
import { ChangeEvent } from "react";

export default function Steps() {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <button>
          <i className="fas fa-arrow-left" />
        </button>
        <button>
          <i className="fa fa-times" />
        </button>
      </div>
      <h2>Make Payment</h2>
      <div className="steps-container">
        <span className="active">1</span>
        <div className="border-step"></div>
        <span className="active">2</span>
        <div className="border-step"></div>
        <span className="active">3</span>
      </div>

      {/* <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => e.preventDefault()}>
        <div className="modal-form">
          <div className="modal-column-one">
            <div className="fields-container">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Email Address" />
            </div>

            <div className="payment-container">
              <h3>Select Method of Payment</h3>

              <div className="payment-item">
                <div className="payment-logo">
                  <img src={credit} alt={credit} />
                  <p>Credit Card Or Debit</p>
                </div>
                <input type="checkbox" />
              </div>
              <div className="payment-item">
                <div className="payment-logo">
                  <img src={paypal} alt={paypal} />
                  <p>Paypal</p>
                </div>
                <input type="checkbox" />
              </div>
              <div className="payment-item">
                <div className="payment-logo">
                  <img src={bank} alt={bank} />
                  <p>Bank Transfer</p>
                </div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="modal-column-two">
            <div className="fields-container">
              <input type="text" placeholder="Last Name" />
              <textarea placeholder="Address for Delivery" />
              <input type="text" placeholder="Mobile Phone" />
            </div>
          </div>
        </div>

        <button>Go to Payment</button>
      </form> 
 */}

  {/*     <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => e.preventDefault()}>
        <div className="modal-form-two">
          <div className="modal-column-one">
            <div className="fields-container">
              <input type="text" placeholder="Card Number" />
              <div className="fields-grups">
                <input type="text" placeholder="Expiry" />
                <input type="text" placeholder="CVV" />
              </div>
              <input type="text" placeholder="Holder Number" />
            </div>
          </div>
        </div>

        <button>Go to Payment</button>
      </form> */}

      <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => e.preventDefault()}>
        <div className="modal-form-three">
          <div className="modal-column-one">
            <img src={sucess} alt={sucess} /> 
             <h3>Success</h3>
          </div>
        </div>

        <button>Go to Payment</button>
      </form> 
    </div>
  );
}
