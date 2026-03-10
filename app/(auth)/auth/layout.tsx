import React from 'react';

const AuthLayout: React.FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <main className="flex justify-center item-center h-screen flex-col bg-zinc-800">
            {children}
        </main>
    )
}

export default AuthLayout