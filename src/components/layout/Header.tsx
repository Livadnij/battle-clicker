import React, { ReactNode } from 'react';
import '../../styles/components/layout/header.scss';

interface HeaderProps {
    children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => (
    <div className="header">
        {children}
    </div>
);

export default Header;