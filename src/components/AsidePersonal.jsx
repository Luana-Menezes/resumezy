import { useState } from "react";
import CustomInput from "./CustomInput";

function AsidePersonal({ formData, onSave }) {
    const [localFormData, setLocalFormData] = useState(formData);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData({ ...localFormData, [name]: value });
    };

    const submitPersonal = (e) => {
        e.preventDefault();
        onSave(localFormData);
    };

    const clearPersonal = () => {
        setLocalFormData({
            name: "",
            email: "",
            tel: "",
            linkedin: "",
            site: ""
        });
    };

    return (
        <form onSubmit={submitPersonal}>
            <CustomInput label="Name" type="text" name="name" value={localFormData.name} onChange={handleOnChange} placeholder="e.g. Maria da Silva" />
            <CustomInput label="Email" type="email" name="email" value={localFormData.email} onChange={handleOnChange} placeholder="e.g. Maria@gmail.com" />
            <CustomInput label="Phone number" type="tel" name="tel" value={localFormData.tel} onChange={handleOnChange} placeholder="e.g. +551199999-9999" />
            <CustomInput label="Linkedin" type="url" name="linkedin" value={localFormData.linkedin} onChange={handleOnChange} placeholder="e.g.  http://linkedin.com/in/username" />
            <CustomInput label="Site/Portfolio" type="url" name="site" value={localFormData.site} onChange={handleOnChange} placeholder="e.g.  http://github.com/username" />
            
            <div className="mt-6 flex gap-x-4 justify-center">
                <button type="button" onClick={clearPersonal} className="bg-gray-400 rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 hover:shadow-lg hover:shadow-gray-500">Clear</button>
                <button type="submit" className="bg-gradient-to-r from-[#df26d3] to-[#044fab] rounded-md px-3 py-2 text-sm font-semibold text-white hover:from-[#044fab] hover:to-[#df26d3] hover:shadow-lg hover:shadow-gray-500">Save</button>
            </div>
        </form>
    );
}

export default AsidePersonal;