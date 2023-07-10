import { React, useState } from "react";

function CheckBox(props){
    return(
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
                <div className="pl-4 flex items-center">
                    <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-base leading-normal ml-2 text-gray-800">{props.choice}</p>
                </div>
            </div>
        </div>
    );
}

const TermDropdown = () => {
    const [isList, setIsList] = useState(false);
    return (
        <div className="px-1">
            <div onClick={() => setIsList(!isList)} className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Term
                <div>
                    {isList ? (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {isList && (
                <div className="w-64 mt-2 p-4 bg-white shadow rounded">
                    <CheckBox choice="Summer" />
                    <CheckBox choice="Fall" />
                    <CheckBox choice="Winter" />
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};

const YearDropdown = () => {
    const [isList, setIsList] = useState(false);
    return (
        <div className="px-1">
            <div onClick={() => setIsList(!isList)} className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Year
                <div>
                    {isList ? (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {isList && (
                <div className="w-64 mt-2 p-4 bg-white shadow rounded">
                    <CheckBox choice="1XXX" />
                    <CheckBox choice="2XXX" />
                    <CheckBox choice="3XXX" />
                    <CheckBox choice="4XXX" />
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};

const PlaceDropdown = () => {
    const [isList, setIsList] = useState(false);
    return (
        <div className="px-1">
            <div onClick={() => setIsList(!isList)} className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                Year
                <div>
                    {isList ? (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {isList && (
                <div className="w-64 mt-2 p-4 bg-white shadow rounded">
                    <CheckBox choice="In-Person" />
                    <CheckBox choice="Online" />
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};

export default function Filters() {
    return (
        <div className="w-1/2 flex">
            <TermDropdown />
            <YearDropdown />
            <PlaceDropdown />
        </div>
    );
}