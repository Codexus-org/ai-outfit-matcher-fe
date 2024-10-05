import React from 'react';

export const AuthLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className="grid h-screen grid-cols-2">
            <section className="bg-primary-600 rounded-br-3xl rounded-tr-3xl" />
            <section className="flex items-center justify-center">{children}</section>
        </main>
    );
};
