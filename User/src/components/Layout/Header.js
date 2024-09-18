import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useCart } from '../../context/cart.js'
import { Badge } from "antd";
// import header from './header.css'

const Header = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();

    const handleLogOut = () => {
        setAuth({

            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        // navigate('/login');
        toast.success('Logout Successfully')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-body-tertiary" >
                <div className='container-fluid'>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="#navbarTogglerDemo01">
                        <h3>Dairy Fresh</h3>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">category</NavLink>
                            </li>

                            {
                                !auth?.user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/register" className="nav-link">Register</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item dropdown">
                                            <NavLink
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                style={{ border: "none" }}
                                            >
                                                {auth?.user?.name}
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink
                                                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                                            }`}
                                                        className="dropdown-item"
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        onClick={handleLogOut}
                                                        to="/login"
                                                        className="dropdown-item"
                                                    >
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                )
                            }

                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                                        Cart
                                    </Badge>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
