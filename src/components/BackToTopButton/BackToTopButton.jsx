// Imports
import React from 'react';
// CSS Imports
import './BackToTopButton.scss';
const returnToTop = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
export default function BackToTopButton(props) {
    return (<button className="back-to-top" onClick={returnToTop}>
        Back To Top
    </button>);
}
