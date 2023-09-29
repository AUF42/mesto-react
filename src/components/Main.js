import React, {useEffect, useState} from "react";
import apiConnect from '../utils/Api';
import Card from './Card';
function Main (props) {
    const [name, setUserName] = useState('');
    const [profession, setUserDescription] = useState('');
    const [avatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect( () => {
        Promise.all([ apiConnect.getUserInfo(), apiConnect.getInitialCards() ])
            .then(( [ userItem, initialCards] ) => {
                setUserName(userItem.name);
                setUserDescription(userItem.about);
                setUserAvatar(userItem.avatar);
                setCards(initialCards);
            })
            .catch( (err) => { console.log(`Возникла ошибка, ${err}`) })
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-area" tabIndex="1">
                    <img src={ avatar } className="profile__avatar" alt="Аватар профиля" />
                    < button
                        type="button"
                        className="profile__avatar-edit"
                        aria-label="Открыть попап редактирования аватара"
                        onClick={ props.onEditAvatar } />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{ name }</h1>
                    <p className="profile__caption">{ profession }</p>
                    < button
                        type="button"
                        className="profile__edit"
                        aria-label="Редактировать профиль"
                        onClick={ props.onEditProfile } />
                </div>
                < button
                    type="button"
                    className="profile__add-button"
                    aria-label="Добавить фотографии в Mesto"
                    onClick={ props.onAddPlace } />
            </section>
            <section className="elements">
                { cards.map( (cardItem) => (
                    < Card
                        key = { cardItem._id }
                        link = { cardItem.link }
                        name = { cardItem.name }
                        likeCount = { cardItem.likes.length }
                        onCardClick = { props.onCardClick }
                        onCardDelete = { props.onCardDelete }
                        card = { cardItem } />
                )) }
            </section>
        </main>
    )
}
export default Main;