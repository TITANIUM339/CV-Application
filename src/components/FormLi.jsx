import "../styles/FormLi.css";

export default function FormLi({
    title,
    onEditClick,
    onDeleteClick,
    edit,
    children,
}) {
    return (
        <li>
            <div className="li-title">
                {title}
                <div>
                    <button onClick={onEditClick}>
                        <img src="/src/assets/icons/edit.svg" alt="edit" />
                    </button>
                    <button onClick={onDeleteClick}>
                        <img src="/src/assets/icons/clear.svg" alt="delete" />
                    </button>
                </div>
            </div>
            {edit ? children : null}
        </li>
    );
}
