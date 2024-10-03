import React, { useState } from 'react';
import '../styles/Modal.css';  // Nous allons ajouter du CSS pour le style plus tard

function Modal({ isModalOpen, onClose , modalText}) {
    if (!isModalOpen) return null;  // Si showModal est false, on ne rend pas le modal

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Mon Modal</h2>
                <p>{modalText}</p>
                <button calssName = "modal-button" onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default Modal