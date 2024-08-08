import React from "react";

import { infos, inputs } from "../api/data";
import { Contact } from "./contact-me";


export const ContactInterface = () => {
    return <Contact
        infos={infos}
        inputs={inputs}
    />;
}
