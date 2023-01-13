import "./styles.css";

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
        <span className="disabled">2</span>
        <div className="border-step"></div>
        <span className="disabled">3</span>
      </div>

      <div className="modal-form">
        <form>
          <div className="modal-column-one"></div>
          <div className="modal-column-two"></div>
        </form>
      </div>
    </div>
  );
}
