import "../styles/FormLi.css";
import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/clear.svg";

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
                        <img src={editIcon} alt="edit" />
                    </button>
                    <button onClick={onDeleteClick}>
                        <img src={deleteIcon} alt="delete" />
                    </button>
                </div>
            </div>
            {edit ? children : null}
        </li>
    );
}
