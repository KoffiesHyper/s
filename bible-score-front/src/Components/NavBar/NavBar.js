import { Link } from "react-router-dom";
import './NavBar.css';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";

export default function NavBar({ user, signedIn, logOut, keyword, updateKW }) {
    return (
        <div className="navbar">
            {!signedIn &&  
            <div>
                <div className='top-bar'>
                    <div className="top-left">
                        <Link to='/' ><button>Home</button></Link>
                        <Link to='/memorize' ><button>Memorize</button></Link>
                        <Link to='/dashboard' ><button>Dashboard</button></Link>
                        <Link to='/read' ><button>Read</button></Link>
                        <div className="top-search">
                            <input className="default-input" type='text' placeholder="Search" onChange={(event) => updateKW(event.target.value)}></input>
                            <Link to={`/search/${keyword}`}>
                                <div className="search-button">
                                    <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '3em' }}>
                                        <div>
                                            <FaSearch size='15px' />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="top-right">
                        <Link to='/login' ><button>Log In</button></Link>
                        <Link to='/register' ><button>Register</button></Link>
                    </div>
                </div>
            </div>}

            {signedIn &&  <div>
                <div className='top-bar'>
                    <div className="top-left">
                        <Link to='/' ><button>Home</button></Link>
                        <Link to='/memorize' ><button>Memorize</button></Link>
                        <Link to='/dashboard' ><button>Dashboard</button></Link>
                        <Link to='/read' ><button>Read</button></Link>
                        <div className="top-search">
                            <input className="default-input" type='text' placeholder="Search" onChange={(event) => updateKW(event.target.value)}></input>
                            <Link to={`/search/${keyword}`}>
                                <div className="search-button">
                                    <IconContext.Provider value={{ color: "#5735029f", className: "global-class-name", size: '3em' }}>
                                        <div>
                                            <FaSearch size='15px' />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="top-right">
                        <Link to='/account-details' ><button>{`Hi, ${user ? user.first_name : ''}`}</button></Link>
                        <Link to='/brethren'><button>Brethren</button></Link>
                        <button onClick={logOut}>Logout</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}