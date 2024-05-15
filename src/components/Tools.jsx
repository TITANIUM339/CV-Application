import "../styles/Tools.css";
import clearIcon from "../assets/icons/clear.svg";
import loadExampleIcon from "../assets/icons/load-example.svg";
import printIcon from "../assets/icons/print.svg";

export default function Tools({ onClickClear, onClickLoadExample }) {
    return (
        <div className="tools tile">
            <button className="clear" onClick={onClickClear}>
                <img src={clearIcon} alt="" />
                Clear CV
            </button>
            <button className="load-example" onClick={onClickLoadExample}>
                <img src={loadExampleIcon} alt="" />
                Load Example
            </button>
            <button className="print" onClick={print}>
                <img src={printIcon} alt="" />
                Print
            </button>
        </div>
    );
}
