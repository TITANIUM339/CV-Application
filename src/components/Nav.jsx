import "../styles/Nav.css";
import contentIcon from "../assets/icons/content.svg";
import customizeIcon from "../assets/icons/customize.svg";

export default function Nav({ onContentClick, onCustomizeClick, tab }) {
    return (
        <nav className="tile">
            <button
                onClick={onContentClick}
                className={tab === "content" ? "button-active" : null}
            >
                <img src={contentIcon} alt="" />
                Content
            </button>
            <button
                onClick={onCustomizeClick}
                className={tab === "customize" ? "button-active" : null}
            >
                <img src={customizeIcon} alt="" />
                Customize
            </button>
        </nav>
    );
}
