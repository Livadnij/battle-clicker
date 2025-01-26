import React, { ReactNode } from 'react';
import '../../styles/components/layout/footer.scss';

interface FooterProps {
    children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => (
    <div className="footer">
        {children}
    </div>
);

export default Footer;