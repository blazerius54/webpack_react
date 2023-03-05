import React from "react";

export default function checkWebsite(website: string) {
    var regExp = new RegExp('^.*?\.org$');

    return  regExp.test(website)

}

