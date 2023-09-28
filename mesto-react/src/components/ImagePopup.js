import React from 'react';

function ImagePopup (props) {
    return (
        <div className={ `popup popup_zoom-active ${ props.isOpen ? 'popup_opened' : '' }` } id={ props.id }>
            <div className="popup__zoom-container">
                <button type="button" className="popup__close-button" onClick={ props.onClose } aria-label="Закрыть зум" />
                <img src={ props.card.link } className="popup__image" alt={ props.card.name } />
                <p className="popup__title">{ props.card.name }</p>
            </div>
        </div>
    )
}

export default ImagePopup;