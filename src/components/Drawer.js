import React from "react";

function Drawer({onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
        <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close"/></h2>

        {items.length > 0 ? 
          <div>
            <div className="items">
          { items.map ((obj) => (
              <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} тг.</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            ))}
            </div>
                <div className="cartTotalBlock">
                <ul>
                  <li className="d-flex">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 тг </b>
                  </li>
                  <li className="d-flex">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 тг</b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
              </div>
          </div> : (
                    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="EmptyCart"/>
                    <h2>Корзина пустая</h2>
                    <p class="opacity-6">Добавьте хоть один товар в корзину</p>
                    <button onClick={onClose} class="greenButton">
                      <img src="/img/arrow.svg" alt="Arrow"/>
                      Вернуться назад
                    </button>
                  </div>
      )}
       </div>
      </div>
    )
}

export default Drawer;