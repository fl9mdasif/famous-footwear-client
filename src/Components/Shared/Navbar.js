import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

import '../../App.css'

const Navbar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    const dummyUserPhoto = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    const photoUrl = user?.reloadUserInfo.photoUrl;
    // console.log(user);
    // console.log(photoUrl)

    const menuItems =
        <>
            <li><Link to='/' href="#2">Home</Link></li>
            <li><Link to='/allshoes' >Shoes</Link></li>
            <li><Link to='/prac' >Prac</Link></li>
            {user && <li><Link to='/addshoe' >AddShoe</Link></li>}
            {user && <li><Link to='/manageshoes' >ManageShoes</Link></li>}
        </>

    return (
        <div>
            <div className="navbar bg-green text-text ">

                <div className="navbar-start">
                    <div className="dropdown bg-red-100">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label >
                        <ul tabIndex="0" className="menu bg-red-300 menu-compact dropdown-content mt-3 p-2 shadow bg-base text-head rounded-box w-52" >
                            {menuItems}

                        </ul >
                    </div >
                    {/* mobile dropdown   */}
                    <a href="/" className=" -16 bg- pl-3 font-bold text-head normal-case text-xl" >
                        <img style={{
                            height: '40px',
                            width: '100%',
                            marginLeft: '10px',
                        }}
                            alt='' src="https://www.elite.net.bd/wp-content/uploads/2020/03/logo-web-elite.png" />
                    </a >
                </div >
                <div className="navbar-center hidden lg:flex " >
                    <ul className="menu  text-white menu-horizontal" >
                        {menuItems}
                    </ul >
                </div >
                <div className="navbar-end pr-4">

                    {/* DropDown user photo and login dropdown end   */}
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class=" m-1">
                            {
                                user ?
                                    <button>
                                        <div class="avatar online">
                                            <div class=" rounded-full hover13 column">
                                                <figure>
                                                    <img className='avatar online userImg' style={{
                                                        height: '42px',
                                                        width: '42px',
                                                        borderRadius: '50%',
                                                        marginLeft: '10px',
                                                        padding: '2px',
                                                        border: '2px solid #c5c5c5 '

                                                    }} src={photoUrl ? photoUrl : dummyUserPhoto} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </button>
                                    :
                                    <button>
                                        <div className="avatar offline">
                                            <div className=' rounded-full'>
                                                <img className='userImg' style={{
                                                    height: '42px',
                                                    width: '42px',
                                                    borderRadius: '50%',
                                                    marginLeft: '10px'
                                                }} src={dummyUserPhoto} alt="" />
                                            </div>
                                        </div>
                                    </button>
                            }
                        </label>

                        {/* dropdown list   */}
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

                            {user && <li li > <Link to='/myitems' >My Items</Link></li>}
                            {
                                user ?
                                    <li>
                                        <button>
                                            <span onClick={handleSignOut} className="flex items-center text-text ">
                                                Sign Out
                                                <span> <img style={{
                                                    height: '42px',
                                                    width: '42px',
                                                    borderRadius: '50%',
                                                    marginLeft: '10px'
                                                }} src={photoUrl ? photoUrl : dummyUserPhoto} alt="" />  </span>
                                            </span>
                                        </button>
                                    </li>
                                    :
                                    <li><Link to='/login' >Login</Link></li>
                            }

                        </ul>
                    </div >

                </div >

            </div >
        </div >
    );
};

export default Navbar;