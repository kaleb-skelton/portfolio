import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <Link onClick={() => window.open(props.path, "_blank")}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            </Link>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <button className='btn--source' type="button" onClick={() => window.open(props.source, "_blank")}>Source Code</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;