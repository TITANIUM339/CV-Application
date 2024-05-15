import Box from "./Box.jsx";
import Nav from "./Nav.jsx";
import Tools from "./Tools.jsx";
import FormLi from "./FormLi.jsx";
import "../styles/Side.css";
import generalInfoIcon from "../assets/icons/general-info.svg";
import educationIcon from "../assets/icons/education.svg";
import workIcon from "../assets/icons/work.svg";
import addIcon from "../assets/icons/add.svg";
import { useState } from "react";

export default function Side({
    name,
    email,
    phone,
    education,
    practical,
    onClear,
    onLoad,
    onGeneralChange,
    onEducationAndPracticalChange,
    onEducationAndPracticalDelete,
    onEducationAdd,
    onPracticalAdd,
}) {
    const [tab, setTab] = useState("content");
    const [editId, setEditId] = useState(null);
    const [font, setFont] = useState("Roboto");

    return (
        <aside>
            <Nav
                onContentClick={() => setTab("content")}
                onCustomizeClick={() => setTab("customize")}
                tab={tab}
            ></Nav>
            <Tools onClickClear={onClear} onClickLoadExample={onLoad}></Tools>
            {(() => {
                if (tab === "content") {
                    return (
                        <>
                            <Box
                                title="General Information"
                                iconUrl={generalInfoIcon}
                            >
                                <form>
                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={onGeneralChange}
                                            autoComplete="on"
                                        />
                                    </label>
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onGeneralChange}
                                            autoComplete="on"
                                        />
                                    </label>
                                    <label>
                                        Phone:
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={phone}
                                            onChange={onGeneralChange}
                                            autoComplete="on"
                                        />
                                    </label>
                                </form>
                            </Box>
                            <Box
                                title="Education"
                                iconUrl={educationIcon}
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
                                            onDeleteClick={() =>
                                                onEducationAndPracticalDelete(
                                                    "education",
                                                    item.id,
                                                )
                                            }
                                        >
                                            <form>
                                                <label>
                                                    School:
                                                    <input
                                                        type="text"
                                                        name="school"
                                                        value={item.school}
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <label>
                                                    Study:
                                                    <input
                                                        type="text"
                                                        name="study"
                                                        value={item.study}
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <label>
                                                    Date:
                                                    <input
                                                        type="text"
                                                        name="date"
                                                        value={item.date}
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                    />
                                                </label>
                                            </form>
                                        </FormLi>
                                    ))}
                                </ul>
                                <div className="add-container">
                                    <button
                                        onClick={() => {
                                            setEditId(onEducationAdd());
                                        }}
                                    >
                                        <img
                                            src={addIcon}
                                            alt="add"
                                        />
                                    </button>
                                </div>
                            </Box>
                            <Box
                                title="Practical Experience"
                                iconUrl={workIcon}
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
                                            onDeleteClick={() =>
                                                onEducationAndPracticalDelete(
                                                    "practical",
                                                    item.id,
                                                )
                                            }
                                        >
                                            <form>
                                                <label>
                                                    Company:
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                        value={item.company}
                                                        autoComplete="off"
                                                    />
                                                </label>
                                                <label>
                                                    Position:
                                                    <input
                                                        type="text"
                                                        name="position"
                                                        value={item.position}
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <label>
                                                    Responsibilities:
                                                    <textarea
                                                        name="responsibilities"
                                                        rows="2"
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                        value={
                                                            item.responsibilities
                                                        }
                                                    ></textarea>
                                                </label>
                                                <label>
                                                    Date:
                                                    <input
                                                        type="text"
                                                        name="date"
                                                        value={item.date}
                                                        onChange={(event) =>
                                                            onEducationAndPracticalChange(
                                                                event,
                                                                item.id,
                                                            )
                                                        }
                                                    />
                                                </label>
                                            </form>
                                        </FormLi>
                                    ))}
                                </ul>
                                <div className="add-container">
                                    <button
                                        onClick={() => {
                                            setEditId(onPracticalAdd());
                                        }}
                                    >
                                        <img
                                            src={addIcon}
                                            alt="add"
                                        />
                                    </button>
                                </div>
                            </Box>
                        </>
                    );
                }

                const fonts = [
                    "monospace",
                    "sans-serif",
                    "cursive",
                    "Roboto",
                    "Courier",
                    "Times",
                ];

                return (
                    <Box title="Font">
                        <div className="fonts">
                            {fonts.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        style={{ fontFamily: item }}
                                        onClick={() => {
                                            document.querySelector(
                                                ".cv",
                                            ).style.fontFamily = item;
                                            setFont(item);
                                        }}
                                        className={
                                            font === item
                                                ? "button-active"
                                                : null
                                        }
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </Box>
                );
            })()}
        </aside>
    );
}
