import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditAvatar (props) {
    return (
        < PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            id = 'popup-edit-avatar'
            title = 'Обновить аватар' >
            <label htmlFor="avatar-input" className="popup__label">
                <input className="popup__input" id="avatar-input" type="url" placeholder="Ссылка на картинку"
                       name="avatar" required />
                    <p className="popup__input-error avatar-input-error">Вы пропустили это поле.</p>
            </label>
        < /PopupWithForm>
    )
}

export default PopupEditAvatar;