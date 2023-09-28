import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditProfile (props) {
    return (
        < PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            id = 'popup__profile-edit'
            title = 'Редактировать профиль'
            type = 'profile' >
            <label htmlFor="input-name" className="popup__label">
                <input className="popup__input" type="text" id="input-name" placeholder="Введите имя" name="name"
                       minLength="2" maxLength="40" required />
                <p className="popup__input-error input-name-error">Вы пропустили это поле.</p>
            </label>
            <label htmlFor="input-profile-caption" className="popup__label">
                <input className="popup__input" type="text" id="input-profile-caption" placeholder="Введите профессию"
                       name="profession" minLength="2" maxLength="200" required />
                <p className="popup__input-error input-profile-caption-error">Вы пропустили это поле.</p>
            </label>
        < /PopupWithForm>
    )
}

export default PopupEditProfile;