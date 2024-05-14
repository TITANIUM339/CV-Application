import { v4 as uuidv4 } from "uuid";
import Side from "./Side";
import Cv from "./Cv";
import "../styles/App.css";
import { useImmer } from "use-immer";

function App() {
    const cvDefault = {
        name: "John Smith",
        email: "johnsmith.is.not.real@gmail.com",
        phone: "555-555-55555",
        education: [
            {
                school: "Harvard",
                study: "BSc Computer Science",
                date: "2023",
                id: uuidv4(),
            },
            {
                school: "Massachusetts Institute of Technology",
                study: "MEng Electrical Engineering",
                date: "2016",
                id: uuidv4(),
            },
        ],
        practical: [
            {
                company: "Microsoft",
                position:
                    "Platform Principal Software Engineer - Windows & Devices",
                responsibilities:
                    "Developed operating system components and frameworks that leverage the power of AI and the scalability of Azure",
                date: "2023 - present",
                id: uuidv4(),
            },
            {
                company: "ASML",
                position: "Electronics Design Engineer",
                responsibilities:
                    "Developed, tested, and supported electronics boards and sub-systems. Defined electrical and test requirements, designed circuits and test equipment.",
                date: "2017 - 2019",
                id: uuidv4(),
            },
        ],
    };

    const [cv, setCv] = useImmer(cvDefault);

    function handleCvClear() {
        setCv((draft) => {
            draft.name = "";
            draft.email = "";
            draft.phone = "";
            draft.education = [];
            draft.practical = [];
        });
    }

    function handleLoadExample() {
        setCv((draft) => {
            draft.name = cvDefault.name;
            draft.email = cvDefault.email;
            draft.phone = cvDefault.phone;
            draft.education = cvDefault.education;
            draft.practical = cvDefault.practical;
        });
    }

    function handleGeneralChange(event) {
        setCv((draft) => {
            draft[event.target.attributes.name.value] = event.target.value;
        });
    }

    function handleEducationAndPracticalChange(event, id) {
        setCv((draft) => {
            const item =
                draft.education.find((item) => item.id === id) ||
                draft.practical.find((item) => item.id === id);

            item[event.target.attributes.name.value] = event.target.value;
        });
    }

    function handleEducationAndPracticalDelete(category, id) {
        setCv((draft) => {
            const itemIndex =
                category === "education"
                    ? draft.education.findIndex((item) => item.id === id)
                    : draft.practical.findIndex((item) => item.id === id);

            draft[category].splice(itemIndex, 1);
        });
    }

    function handleEducationAdd() {
        const id = uuidv4();

        setCv((draft) => {
            draft.education.push({
                school: "",
                study: "",
                date: "",
                id,
            });
        });

        return id;
    }

    function handlePracticalAdd() {
        const id = uuidv4();

        setCv((draft) => {
            draft.practical.push({
                company: "",
                position: "",
                responsibilities: "",
                date: "",
                id,
            });
        });

        return id;
    }

    return (
        <main>
            <Side
                name={cv.name}
                email={cv.email}
                phone={cv.phone}
                onClear={handleCvClear}
                onLoad={handleLoadExample}
                education={cv.education}
                practical={cv.practical}
                onGeneralChange={handleGeneralChange}
                onEducationAndPracticalChange={
                    handleEducationAndPracticalChange
                }
                onEducationAndPracticalDelete={
                    handleEducationAndPracticalDelete
                }
                onEducationAdd={handleEducationAdd}
                onPracticalAdd={handlePracticalAdd}
            ></Side>
            <Cv
                name={cv.name}
                email={cv.email}
                phone={cv.phone}
                education={cv.education}
                practical={cv.practical}
            ></Cv>
        </main>
    );
}

export default App;
