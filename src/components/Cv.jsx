import "../styles/Cv.css";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";

function Experience({ name, date, children }) {
    return (
        <div className="experience">
            <div className="date">{date}</div>
            <div className="description">
                <h3>{name}</h3>
                {children}
            </div>
        </div>
    );
}

export default function Cv({
    name,
    email,
    phone,
    education,
    practical,
}) {
    return (
        <section className="cv">
            <div className="general-info">
                {name ? <h1>{name}</h1> : null}
                <div>
                    {email ? (
                        <div className="email">
                            <img src={mailIcon} alt="" />
                            {email}
                        </div>
                    ) : null}
                    {phone ? (
                        <div className="phone">
                            <img src={phoneIcon} alt="" />
                            {phone}
                        </div>
                    ) : null}
                </div>
            </div>
            <div>
                <div className="educational-exp">
                    {(() => {
                        if (!education.length) return;

                        return (
                            <>
                                <h2>Education</h2>
                                {education.map((item) => (
                                    <Experience
                                        key={item.id}
                                        name={item.school}
                                        date={item.date}
                                    >
                                        <p>{item.study}</p>
                                    </Experience>
                                ))}
                            </>
                        );
                    })()}
                </div>
                <div className="practical-exp">
                    {(() => {
                        if (!practical.length) return;

                        return (
                            <>
                                <h2>Practical Experience</h2>
                                {practical.map((item) => (
                                    <Experience
                                        key={item.id}
                                        name={item.company}
                                        date={item.date}
                                    >
                                        <h4>{item.position}</h4>
                                        <p>{item.responsibilities}</p>
                                    </Experience>
                                ))}
                            </>
                        );
                    })()}
                </div>
            </div>
        </section>
    );
}
