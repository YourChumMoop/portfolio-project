import { Link, useLocation} from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <>
        <div>
        
        <ul >
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/About">ABOUT ME</Link>
            </li>
            <li>
                <Link to="/Portfolio">PORTFOLIO</Link>
            </li>
            <li>
                <Link to="/Resume">RESUME</Link>
            </li>
            <li>
                <Link to="/Contact">CONTACT ME</Link>
            </li>
        </ul>
        </div>
        </>
    );
}

export default NavTabs;