import React, { useContext, useState } from "react";
import { Header } from "../../components/header/header";
import { basketContext } from "../../providers/basketProvider/basketProvider";
import "./basketScreen.css";
import { SendManagerModal } from "./sendManagerModal/sendManagerModal";

export function BasketScreen() {
  const {
    basket,
    deleteItem,
    incrementItemCount,
    decrementItemCount,
    clearAllBasket
  } = useContext(basketContext);

  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div>
      <Header />
      <div className="basketPage">
        {Boolean(basket.length) && (
          <div className="basketButtonBlock">
            <button className="clearButton" onClick={clearAllBasket}>
              Clear Basket
            </button>
            <button
              className="sendManagerButton"
              onClick={() => setOpenModal(true)}
            >
              Send To Manager
            </button>
          </div>
        )}
        <p className="basketTitle">
          Your basket {!Boolean(basket.length) && "is empty!!!"}
        </p>
        <div className="basketList">
          {basket.map(item => (
            <div key={item.id} className="basketItem">
              <img src={item.image} className="basketImage" />
              <div className="basketContent">
                <div className="basketTitleBlock">
                  <span>{item.code}</span>
                  <span>size: {item.size}</span>
                  <span>color: {item.color}</span>
                </div>

                <div className="basketButtonBlock">
                  <button
                    className="buttons"
                    onClick={() => decrementItemCount(item.id)}
                  >
                    -
                  </button>
                  <span className="basketItemCount">{item.count}</span>
                  <button
                    className="buttons"
                    onClick={() => incrementItemCount(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="buttons"
                    onClick={() => deleteItem(item.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SendManagerModal
        isOpen={isOpenModal}
        onClick={() => setOpenModal(false)}
      />
    </div>
  );
}
