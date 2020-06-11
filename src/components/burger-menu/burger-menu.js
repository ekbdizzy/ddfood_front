import React from "react";
import './burger-menu.scss';

const BurgerMenu = ({menuIsActive, toggleMenu}) => {


    let classNames = menuIsActive ?
        'burger-menu__button burger-menu__active'
        : 'burger-menu__button';

    return (
        <div className='burger-menu'
             onClick={(e) => toggleMenu(e)}>

            <div className={classNames}>
                <span className="burger-menu__lines"/>
                <span className="burger-menu__lines"/>
                <span className="burger-menu__lines"/>
            </div>

        </div>
    );
};

export default BurgerMenu;