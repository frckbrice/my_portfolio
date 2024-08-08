"use client";

import { Work } from "./work";
import { projects } from "../api/data";
import { WorkSliderBtns } from "./work-slider-btns";

const WorkSliderBtnsInterface = () => {
    return <WorkSliderBtns
        btnStyle=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
        containerStyle=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
        iconStyle=""
    />
};

export function WorkInterface() {
    return <Work
        works={projects}
        WorkSliderBtns={WorkSliderBtnsInterface}
    />;
}
