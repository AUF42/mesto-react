import React from 'react';

function Card (props) {
    function handleClick () { props.onCardClick(props.card) }
    function handleDelete () { props.onCardDelete(props.card) }

    return (
        <div className="element">
            <img src={ props.link } className="element__picture" onClick={ handleClick } alt={ props.name } />
            <button type="button" className="element__delete" onClick={ handleDelete } aria-label="Удалить место" />
            <div className="element__info">
                <h2 className="element__intro">{ props.name }</h2>
                <div className="element__like-area">
                    <button type="button" className="element__like" aria-label="Лайк" />
                    <p className="element__like-counter">{ props.likeCount > 0 ? props.likeCount : null }</p>
                </div>
            </div>
        </div>
    )
}

export default Card;