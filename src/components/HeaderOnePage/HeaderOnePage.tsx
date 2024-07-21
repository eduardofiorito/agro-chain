import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';

function HeaderOnePage() {
    return (
        <header className="flex justify-between items-center p-4 bg-background text-neutral-50">
            <Link href="/" className="flex items-center mt-20 ml-40">
                <Logo />
            </Link>
            <nav className="mt-2 mr-40">
                <ul className="flex gap-10">
                    <li className="cursor-pointer text-primary-500 hover:text-primary-300">Home</li>
                    <li className="cursor-pointer text-primary-500 hover:text-primary-300">Sobre</li>
                    <li className="cursor-pointer text-primary-500 hover:text-primary-300">Solução e tecnologia</li>
                    <li className="cursor-pointer text-primary-500 hover:text-primary-300">Benefícios</li>
                    <li className="cursor-pointer text-primary-500 hover:text-primary-300">Selos de qualidade</li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderOnePage;
