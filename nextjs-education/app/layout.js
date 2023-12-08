import React from 'react';

const Layout = ({children}) => {
    return (
        <html lang='en'>
            <body>

            <header>Header</header>
            {children}
            <footer>Footer</footer>

            </body>
        </html>
    );
};

export default Layout;