import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.header__nav__mobile');
        const menus = document.querySelector('.menus');
        const menuItems = document.querySelectorAll('.menus .li');
        const leftName = document.querySelector('.header .left .name');

        const toggleMenu = () => {
            const isExpanded = menus.classList.toggle('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded.toString());
        };

        hamburgerMenu.addEventListener('click', toggleMenu);
        leftName.addEventListener('click', () => {
            menus.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menus.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
        });

        return () => {
            hamburgerMenu.removeEventListener('click', toggleMenu);
            leftName.removeEventListener('click', () => {
                menus.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
            menuItems.forEach(item => {
                item.removeEventListener('click', () => {
                    menus.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                });
            });
        };
    }, []);

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <Link href="/" className="left">
                <div className="name">&gt; West_Cold</div>
            </Link>
            <div className="header-right">
                <div className="header-status">
                    <div className="status-indicator"></div>
                    <span className="status-text">ONLINE</span>
                </div>
                <div className="header-time">
                    {currentTime}
                </div>
            </div>
            <div className="header__nav__mobile" aria-controls="primary-menu" aria-expanded="false" role="button" tabIndex="0">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

