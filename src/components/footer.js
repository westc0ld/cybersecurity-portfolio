import Link from "next/link"
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TistoryIcon from "./icons/TistoryIcon";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                    <div className="container">
                        <div className="copy">© 2024. West Cold. All rights reserved.</div>
                        <div className="logo">
                            <button 
                                onClick={() => window.open('https://github.com/westc0ld/', '_blank')}
                                className="icon-button github-button"
                                aria-label="GitHub"
                            >
                                <GithubIcon className="social-icon github-icon" />
                            </button>
                            <button 
                                onClick={() => window.open('https://eatitstory.tistory.com/', '_blank')}
                                className="icon-button tistory-button"
                                aria-label="Tistory"
                            >
                                <TistoryIcon className="social-icon tistory-icon" />
                            </button>    
                            <button 
                                onClick={() => window.open('https://www.instagram.com/west__cold/', '_blank')}
                                className="icon-button instagram-button"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="social-icon instagram-icon" />
                            </button>    
                        </div>
                    </div>
            </footer>
        </>
    )
}

