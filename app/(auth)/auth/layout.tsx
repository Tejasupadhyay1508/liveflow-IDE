import React from 'react';

const AuthLayout: React.FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {children}
        </div>
    );
};

export default AuthLayout;