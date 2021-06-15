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
        else if(!inputRef.current.value.trim()){
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
                <span className={style.menubar}>
                    <i class="fas fa-bars fa-lg"></i>
                </span>
                <img src="./images/logo.png" className={style.logo}></img>
                <div className={style.headerInfo}>
                    <h1 className={style.title}>YouTube</h1>
                    <span className={style.titleLang}>KR</span>
                </div>
                <input className={style.input} ref={inputRef} onKeyPress={onKeyPress} type="text" placeholder="Search.."></input>
                <button className={style.btn} onClick={onClick}>
                    <img className={style.search} src="./images/search.png"></img>
                </button>
            </div>
        </header>
    )
};

export default Header;