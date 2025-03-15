import React from "react"

interface Alprops {
    message: string,
}

export const Alert: React.FC <Alprops>= ({message}) =>{

    return (
        <>
            <div className="fixed inset-0 w-full h-screen bg-slate-700 flex justify-center content-center">
                <p className="text-white font-bold">{message}</p>
            </div>
        </>
    )
}