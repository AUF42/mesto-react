import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile';
import PopupAddCard from './PopupAddCard';
import PopupWithForm from './PopupWithForm';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImageOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    function handleEditAvatarClick () { setIsEditAvatarPopupOpen(true) }
    function handleEditProfileClick () { setIsEditProfilePopupOpen(true) }
    function handleAddPlaceClick () { setIsAddPlacePopupOpen(true) }
    function handleCardDelete () { setIsDeleteOpen(true) }
    function handleCardClick (cardItem) {
        setIsImageOpen(true);
        setSelectedCard({
            ...selectedCard,
            name: cardItem.name,
            link: cardItem.link
        })
    }

    function closeAllPopups () {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImageOpen(false);
        setIsDeleteOpen(false);
    }
    return (
            <div className="page">
                <Header />
                <Main
                    onEditAvatar = { handleEditAvatarClick }
                    onEditProfile = { handleEditProfileClick }
                    onAddPlace = { handleAddPlaceClick }
                    onCardClick = { handleCardClick }
                    onCardDelete = { handleCardDelete }
                />
                <Footer />
                <PopupEditAvatar
                    isOpen = { isEditAvatarPopupOpen }
                    onClose = { closeAllPopups } />
                <PopupEditProfile
                    isOpen = { isEditProfilePopupOpen }
                    onClose = { closeAllPopups } />
                <PopupAddCard
                    isOpen = { isAddPlacePopupOpen }
                    onClose = { closeAllPopups } />
                <ImagePopup
                    isOpen = { isImagePopupOpen }
                    onClose = { closeAllPopups }
                    card = { selectedCard } />
                <PopupWithForm
                    isOpen = { isDeleteConfirmPopupOpen }
                    onClose = { closeAllPopups }
                    id = 'popup-confirmation'
                    title = 'Вы уверены?'
                    type = 'delete-card'
                    buttonText = 'Да' />
            </div>
    );
}
export default App;
