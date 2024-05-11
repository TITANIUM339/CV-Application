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

    function handleGeneralChange(event) {
        setCv((draft) => {
            draft[event.target.attributes.name.value] = event.target.value;
        });
    }

    return (
        <main>
            <Side
                name={cv.name}
                email={cv.email}
                phone={cv.phone}
                education={cv.education}
                practical={cv.practical}
                onGeneralChange={handleGeneralChange}
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
