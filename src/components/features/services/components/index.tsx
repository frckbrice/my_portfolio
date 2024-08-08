import React from "react";

import { Services } from "./service";
import { services } from "../api/data";


export default function ServiceInterface() {
    return <Services services={services} />
};
