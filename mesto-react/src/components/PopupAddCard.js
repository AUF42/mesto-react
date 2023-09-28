import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddCard (props) {
    return (
        < PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            id = 'popup__add-card'
            title = 'Новое место'
            type = 'mesto'
            buttonText = 'Создать' >
            <label htmlFor="place-name-input" className="popup__label">
                <input className="popup__input" id="place-name-input" type="text" placeholder="Название" name="name"
                       minLength="2" maxLength="30" required />
                    <p className="popup__input-error place-name-input-error">Вы пропустили это поле.</p>
            </label>
            <label htmlFor="place-image-input" className="popup__label">
                <input className="popup__input" id="place-image-input" type="url" placeholder="Ссылка на картинку"
                       name="link" required />
                    <p className="popup__input-error place-image-input-error">Вы пропустили это поле.</p>
            </label>
        < /PopupWithForm>
    )
}

export default PopupAddCard;