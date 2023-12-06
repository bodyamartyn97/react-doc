import './SideBar.css';
import data from "../../data/data.json";

function SideBar() {

    return (
        <div className="SideBar">
            <nav>
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;