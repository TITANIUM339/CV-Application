import "../styles/Nav.css";

export default function Nav({ onContentClick, onCustomizeClick, tab }) {
    return (
        <nav className="tile">
            <button
                onClick={onContentClick}
                className={tab === "content" ? "button-active" : null}
            >
                <img src="/src/assets/icons/content.svg" alt="" />
                Content
            </button>
            <button
                onClick={onCustomizeClick}
                className={tab === "customize" ? "button-active" : null}
            >
                <img src="/src/assets/icons/customize.svg" alt="" />
                Customize
            </button>
        </nav>
    );
}
