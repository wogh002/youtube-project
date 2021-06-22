import React, { useRef } from 'react';
import style from './header.module.css';

const Header = ({ onSearch }) => {
    const ENTER = 'Enter';
    const inputRef = useRef();

    const resetInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    const onKeyPress = event => {
        if (event.code === ENTER && inputRef.current.value.trim()) {
            onSearch(inputRef.current.value);
            resetInput();
        }
        else if (!inputRef.current.value.trim()) {
            resetInput(); 
        }
    }
    const onClick = () => {
        if (inputRef.current.value.trim()) {
            onSearch(inputRef.current.value);
            resetInput();
        }
        else {
            resetInput();
        }
    }
    return (
        <header className={style.header}>
            <div className={style.fixed}>
                <a href="./" className={style.headerInfo}>
                    <span className={style.menubar}>
                        <i className="fas fa-bars fa-lg"></i>
                    </span>
                    <img src="./images/logo.png" className={style.logo} alt="logo"></img>
                    <h1 className={style.title}>YouTube</h1>
                    <span className={style.titleLang}>KR</span>
                </a>
                <div className={style.search}>
                    <input className={style.input} ref={inputRef} onKeyPress={onKeyPress}type="text" placeholder="검색"></input>
                    <button type="button" className={style.keyboard}><i className="fas fa-keyboard"></i></button>
                    <button type="button" className={style.searchBtn} onClick={onClick}>
                        <img className={style.searchIcon} src="./images/search.png" alt="search"></img>
                    </button>
                    <button type="button" className={style.microphone}><i className="fas fa-microphone"></i></button>
                </div>
                <div className={style.info}>
                    <button type="button"><i className="fas fa-video"></i></button>
                    <button type="button"><i className="fas fa-ellipsis-v"></i></button>
                    <button type="button"><i className="fas fa-bell"></i></button>
                    <button type="button"><i className="fas fa-circle-notch"></i></button>
                </div>
            </div>
        </header>
    )
};

export default Header;