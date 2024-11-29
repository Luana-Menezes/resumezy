import { useState, useEffect } from "react";
import CustomInput from "./CustomInput";

function AsideEducation({ entry, onSave, onDelete }) {
    const [localFormData, setLocalFormData] = useState(entry);

    useEffect(() => {
        setLocalFormData(entry);
    }, [entry]);
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData({ ...localFormData, [name]: value });
    };

    const submitEducation = (e) => {
        e.preventDefault();
        onSave(localFormData);
    };

    const clearEducation = () => {
        setLocalFormData({
            school: "",
            title: "",
            dateFrom: "",
            dateTo: "",
            location: ""
        });
    };

    const deleteEducation = () => {
        onDelete(entry);
    };

    return (
        <form onSubmit={submitEducation}>
            <CustomInput type="text" label="School Name" name="school" value={localFormData.school} onChange={handleOnChange} placeholder="e. g. Orange Inc." />
            <CustomInput type="text" label="Title of Study" name="title" value={localFormData.title} onChange={handleOnChange} placeholder="e. g. Software Engineer" />
            <CustomInput type="text" label="Date From" name="dateFrom" value={localFormData.dateFrom} onChange={handleOnChange} placeholder="e. g. Jan 2020" />
            <CustomInput type="text" label="Date To" name="dateTo" value={localFormData.dateTo} onChange={handleOnChange} placeholder="e. g. Dec 2025" />
            <CustomInput type="text" label="Location" name="location" value={localFormData.location} onChange={handleOnChange} placeholder="e. g. Sao Paulo" />

            <div className="mt-6 flex gap-x-4 justify-center">
                <button type="button" onClick={clearEducation} className="bg-gray-400 rounded px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-gray-500">Clear</button>
                <button type="button" onClick={deleteEducation} className="bg-gray-700 rounded px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500">Delete</button>
                <button type="submit" className="bg-gradient-to-r from-[#df26d3] to-[#044fab] rounded px-3 py-2 text-sm font-semibold text-white hover:from-[#044fab] hover:to-[#df26d3] hover:shadow-lg hover:shadow-gray-500">Save</button>
            </div>
        </form>
    )
}

export default AsideEducation;