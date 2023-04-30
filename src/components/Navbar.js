import React from 'react';


function Navbar() {
    return (
        <>
            <div className="px-8 navbar bg-inherit">
                <div className="navbar-start">
                    <a href='/' className="btn  bg-inherit normal-case text-xl">
                        BolChal
                    </a>
                </div>
                <div className="navbar-end">
                    <a className="btn  bg-inherit normal-case text-xl" href='/write' >Write</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
