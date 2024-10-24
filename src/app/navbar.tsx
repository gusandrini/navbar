"use client";
import React, { useState } from "react";

const Navbar = () =>{

    return(
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-white">
                                Logo
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Home
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Sobre
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Serviços
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Contato
                                </a>
                            </div> 
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;