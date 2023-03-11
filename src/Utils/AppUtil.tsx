import React from "react";

export default function checkWebsite(website: string) {
    const regExp = new RegExp('^.*?\.org$');

    return  regExp.test(website)

}

