import { useEffect, useState } from "react";
import { TextInput } from "./email";

export default function Door() {
    const [close, setClose] = useState(false);
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!close) {
            document.title = "Idle";
        }
    }, [close]);

    const handleClose = () => {
        if (password != import.meta.env.VITE_DOOR_PASSWORD) {
            console.log(import.meta.env.VITE_DOOR_PASSWORD);
            document.title = "GET OUTTA HERE!";
            return;
        }
        document.title = import.meta.env.VITE_DOOR_PASSWORD;
        setClose(true);
        setTimeout(() => {
            document.title = "Grant Kitlowski";
            setClose(false);
        }, 4000);
    };

    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-y-7'>
            <div className='w-1/4'>
                <TextInput
                    value={password}
                    onChange={(v: string) => setPassword(v)}
                    label='Password. Should you be here?'
                />
            </div>
            <button
                className={`flex-row items-center justify-center rounded-lg p-[5%] ${close ? "bg-black" : "bg-green-800"}`}
                onClick={handleClose}
            >
                <h1 className='text-2xl text-white'>{close ? "Closing..." : "Idle"}</h1>
            </button>
        </div>
    );
}