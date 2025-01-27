import React, { ReactNode } from 'react';
import '../../styles/components/layout/main.scss';

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
    <div className="main">
        {children}
    </div>
);

export default Main;