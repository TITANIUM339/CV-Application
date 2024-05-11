import "../styles/Box.css";

export default function List({ title, iconUrl, children }) {
    return (
        <section className="tile">
            <div className="title">
                {iconUrl ? <img src={iconUrl} alt="" /> : null}
                <h1>{title}</h1>
            </div>
            {children}
        </section>
    );
}
