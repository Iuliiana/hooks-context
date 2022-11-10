import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/hook-examples">hook-examples</a>
                </li>
            </ul>
            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}