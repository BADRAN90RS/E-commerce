import React, { useState } from 'react'
import { add, files, left, mail, orders } from '../resources';
import { button } from 'bootstrap';
import AddWork from './AddWork';
import Orders from './Orders';
import Inbox from './inbox';
import Files from './Files';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
    const { logout } = props;
    const [page, setPage] = useState(<AddWork />)

    return (
        <div className='dashboard'>

            <ul class="nav justify-content-center border-bottom border">

                <li className="nav-item ">
                    <Link to="/" className="nav-link active" aria-current="page" href=""><img src={left} />Home</Link>
                </li>

                <li className="nav-item">
                    <button onClick={() => setPage(<AddWork />)} className="nav-link" href="#"><img src={add} />Add work</button>
                </li>

                <li className="nav-item">
                    <button onClick={() => setPage(<Inbox />)} className="nav-link" href="#"><img src={mail} />Inbox</button>
                </li>

                <li className="nav-item">
                            <button onClick={() => setPage(<Orders />)} className="nav-link " href="#"><img src={orders} />Orders</button>
                </li>

                <li className="nav-item">
                            <button onClick={() => setPage(<Files />)} className="nav-link " href="#"><img src={files} />Files</button>
                </li>

                <li className="nav-item">
                            <Link to="/login" className="nav-link " href="#"><button onClick={logout}>log out</button></Link>
                </li>
            </ul>
                    <div className='container'>
                        {page}
                    </div>

                </div>
     
    )
}
