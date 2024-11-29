import { useState, useEffect } from "react";
import CustomInput from "./CustomInput";

function AsideExperience({ entry, onSave, onDelete }) {
    const [localFormData, setLocalFormData] = useState(entry);

    useEffect(() => {
        setLocalFormData(entry);
    }, [entry]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === 'desc') {
            setLocalFormData({ ...localFormData, [name]: value.split('\n'), });
        } else {
            setLocalFormData({ ...localFormData, [name]: value });
        }
    };

    const submitExperience = (e) => {
        e.preventDefault();
        onSave(localFormData);
    };

    const clearExperience = () => {
        setLocalFormData({
            company: "",
            jobTitle: "",
            desc: [],
            dateFrom: "",
            dateTo: "",
            location: ""
        });
    };

    const deleteExperience = () => {
        onDelete(entry);
    };

    return (
        <form onSubmit={submitExperience}>
            <CustomInput type="text" label="Company Name" name="company" value={localFormData.company} onChange={handleOnChange} placeholder="e. g. Orange Inc." />
            <CustomInput type="text" label="Position Title" name="jobTitle" value={localFormData.jobTitle} onChange={handleOnChange} placeholder="e. g. Software Engineer" />
            <div className="mt-4">
                <label className="block text-sm font-medium" htmlFor="desc">Description</label>
                <textarea id="desc" name="desc" value={(localFormData.desc || []).join("\n")} rows="5" onChange={handleOnChange}
                    className="block w-full py-1 px-2 mt-1 text-sm border-2 border-gray-100 rounded shadow-md bg-gray-50 outline-none focus:bg-white focus:ring-2 focus:ring-[#df26d3] focus:border-2 focus:border-[#044fab]"
                    placeholder="Developed software solutions..." />
            </div>
            <CustomInput type="text" label="Date From" name="dateFrom" value={localFormData.dateFrom} onChange={handleOnChange} placeholder="e. g. Jan 2026" />
            <CustomInput type="text" label="Date To" name="dateTo" value={localFormData.dateTo} onChange={handleOnChange} placeholder="e. g. Jun 2027" />
            <CustomInput type="text" label="Location" name="location" value={localFormData.location} onChange={handleOnChange} placeholder="e. g. Sao Paulo" />

            <div className="mt-6 flex gap-x-4 justify-center">
                <button type="button" onClick={clearExperience} className="bg-gray-400 rounded px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-gray-500">Clear</button>
                <button type="button" onClick={deleteExperience} className="bg-gray-700 rounded px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500">Delete</button>
                <button type="submit" className="bg-gradient-to-r from-[#df26d3] to-[#044fab] rounded px-3 py-2 text-sm font-semibold text-white hover:from-[#044fab] hover:to-[#df26d3] hover:shadow-lg hover:shadow-gray-500">Save</button>
            </div>
        </form>
    )
}

export default AsideExperience;