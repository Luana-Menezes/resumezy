function CustomInput({ label, name, type, value, onChange, placeholder}) {
    const inputClasses = "block w-full py-1 px-2 mt-1 text-sm border-2 border-gray-100 rounded shadow-md bg-gray-50 outline-none focus:bg-white focus:ring-2 focus:ring-[#df26d3] focus:border-2 focus:border-[#044fab]";
    return (
        <div className="mt-4">
            <label className="block text-sm font-medium" htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} className={inputClasses} placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;