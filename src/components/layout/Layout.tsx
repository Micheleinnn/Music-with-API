import React from 'react';
import MenuList from "../menu-list/Menu-list";

const Layout = ({children}) => {
    return (
        <div>
            <MenuList/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;