import React, {useEffect, useState} from "react";
import '/src/app.css';

interface CustomButton {
    buttonName: string,
    onClick: any,
    isDisabled: boolean
}

export default function ButtonCustom({buttonName, onClick, isDisabled}: CustomButton) {

    return (
        <>
            <button onClick={onClick} disabled={isDisabled}>{buttonName}</button>
        </>
    );
}
