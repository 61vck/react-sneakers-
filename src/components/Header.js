import { Link } from 'react-router-dom'; 

import React from "react";

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
          <div className="d-flex align-center">
            <img wight ={40} height = {40} src="/img/image 4.png" alt="navLogo"/>
              <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img wight ={18} height = {18} src="/img/group.svg" alt="Корзина"/>
            <span>1205 тг.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites">
            <img wight ={18} height = {18} src="/img/heart.svg" alt="Закладки"/>
            </Link>
          </li>
          <li className="cu-p">
            <img wight ={18} height = {18} src="/img/union.svg" alt="Профиль"/>
            <span>Aidar</span>
          </li>
        </ul>
      </header>
    )
} 

export default Header;