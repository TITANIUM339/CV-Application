import "../styles/Tools.css";

export default function Tools({
    onClickClear,
    onclickLoadExample,
    onClickPrint,
}) {
    return (
        <div className="tools tile">
            <button className="clear" onClick={onClickClear}>
                <img src="/src/assets/icons/clear.svg" alt="" />
                Clear CV
            </button>
            <button className="load-example" onClick={onclickLoadExample}>
                <img src="/src/assets/icons/load-example.svg" alt="" />
                Load Example
            </button>
            <button className="print" onClick={onClickPrint}>
                <img src="/src/assets/icons/print.svg" alt="" />
                Print
            </button>
        </div>
    );
}
