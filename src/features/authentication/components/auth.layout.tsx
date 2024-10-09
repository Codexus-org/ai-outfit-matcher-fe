import React from 'react';

export const AuthLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className="grid h-screen grid-cols-2">
            <section className="bg-primary-600 rounded-br-3xl rounded-tr-3xl flex justify-center items-center">
              <h1 className="text-white font-bold text-8xl text-center">AI - Outfit Matcher</h1>
            </section>
            <section className="flex items-center justify-center">{children}</section>
        </main>
    );
};
