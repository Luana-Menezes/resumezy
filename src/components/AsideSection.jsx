function AsideSection({ title, children, visibility, toggleVisibility, sectionIcon }) {
    return (
        <section>
            <button type="button" onClick={toggleVisibility} className="inline-flex justify-between py-4 px-3 mt-2 rounded-lg text-base font-bold w-full bg-white text-slate-900 hover:bg-gradient-to-r from-[#df26d3] to-[#044fab] hover:text-white">
                {sectionIcon}
                {title}
                {visibility ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                )}
            </button>
            {visibility && (
                <div className="px-2 pb-6">
                    {children}
                </div>
            )}
        </section>
    )
}

export default AsideSection;