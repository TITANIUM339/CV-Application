import Box from "./Box.jsx";
import Nav from "./Nav.jsx";
import Tools from "./Tools.jsx";
import FormLi from "./FormLi.jsx";
import "../styles/Side.css";
import { useState } from "react";

export default function Side({
    name,
    email,
    phone,
    education,
    practical,
    onGeneralChange,
}) {
    const [tab, setTab] = useState("content");
    const [editId, setEditId] = useState(null);

    function logClick() {
        console.log("click");
    }

    return (
        <aside>
            <Nav
                onContentClick={() => setTab("content")}
                onCustomizeClick={() => setTab("customize")}
                tab={tab}
            ></Nav>
            <Tools
                onClickClear={logClick}
                onclickLoadExample={logClick}
                onClickPrint={logClick}
            ></Tools>
            {(() => {
                if (tab === "content") {
                    return (
                        <>
                            <Box
                                title="General Information"
                                iconUrl="/src/assets/icons/general-info.svg"
                            >
                                <form>
                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={onGeneralChange}
                                        />
                                    </label>
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onGeneralChange}
                                        />
                                    </label>
                                    <label>
                                        Phone:
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={phone}
                                            onChange={onGeneralChange}
                                        />
                                    </label>
                                </form>
                            </Box>
                            <Box
                                title="Educational Experience"
                                iconUrl="/src/assets/icons/education.svg"
                            >
                                <ul>
                                    {education.map((item) => (
                                        <FormLi
                                            key={item.id}
                                            title={item.school}
                                            onEditClick={() =>
                                                setEditId(
                                                    item.id !== editId
                                                        ? item.id
                                                        : null,
                                                )
                                            }
                                            edit={item.id === editId}
                                        >
                                            <form>
                                                <label>
                                                    School:
                                                    <input
                                                        type="text"
                                                        name="school"
                                                        value={item.school}
                                                    />
                                                </label>
                                                <label>
                                                    Study:
                                                    <input
                                                        type="text"
                                                        name="study"
                                                        value={item.study}
                                                    />
                                                </label>
                                                <label>
                                                    Date:
                                                    <input
                                                        type="text"
                                                        name="date"
                                                        value={item.date}
                                                    />
                                                </label>
                                            </form>
                                        </FormLi>
                                    ))}
                                </ul>
                                <div className="add-container">
                                    <button>
                                        <img
                                            src="/src/assets/icons/add.svg"
                                            alt="add"
                                        />
                                    </button>
                                </div>
                            </Box>
                            <Box
                                title="Practical Experience"
                                iconUrl="/src/assets/icons/work.svg"
                            >
                                <ul>
                                    {practical.map((item) => (
                                        <FormLi
                                            key={item.id}
                                            title={item.company}
                                            onEditClick={() =>
                                                setEditId(
                                                    item.id !== editId
                                                        ? item.id
                                                        : null,
                                                )
                                            }
                                            edit={item.id === editId}
                                        >
                                            <form>
                                                <label>
                                                    Company:
                                                    <input
                                                        type="text"
                                                        name="school"
                                                        value={item.company}
                                                    />
                                                </label>
                                                <label>
                                                    Position:
                                                    <input
                                                        type="text"
                                                        name="study"
                                                        value={item.position}
                                                    />
                                                </label>
                                                <label>
                                                    Responsibilities:
                                                    <textarea
                                                        name="responsibilities"
                                                        rows="2"
                                                    >
                                                        {item.responsibilities}
                                                    </textarea>
                                                </label>
                                                <label>
                                                    Date:
                                                    <input
                                                        type="text"
                                                        name="date"
                                                        value={item.date}
                                                    />
                                                </label>
                                            </form>
                                        </FormLi>
                                    ))}
                                </ul>
                                <div className="add-container">
                                    <button>
                                        <img
                                            src="/src/assets/icons/add.svg"
                                            alt="add"
                                        />
                                    </button>
                                </div>
                            </Box>
                        </>
                    );
                }

                return (
                    <>
                        <Box title="Layout"></Box>
                        <Box title="Font"></Box>
                    </>
                );
            })()}
        </aside>
    );
}
