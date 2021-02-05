import React, { createContext, useState, useEffect } from 'react';
import fire from '../utils/fire';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = (props) => {
    
    return (
        <AuthenticationContext.Provider>
            {props.children}
        </AuthenticationContext.Provider>
    )
}