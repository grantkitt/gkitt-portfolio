import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailIcon, homeIcon } from "../components/assets";

interface email {
    name: string;
    email: string;
    subject: string;
    body: string;
}

export default function EmailScreen() {
    const [message, setMessage] = useState<email>({ name: "", email: "", subject: "", body: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleChange = (k: string, v: string) => {
        setMessage({ ...message, [k]: v });
    };

    const handleSend = async () => {
        if (!message.name || !message.email || !message.subject || !message.body) {
            console.log("Error!");
            setSuccess("");
            setError("Please fill all fields");
            return;
        }
        try {
            const res = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID!,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
                {
                    ...message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            console.log(res);
            setSuccess("Email sent successfully");
            setError("");
        } catch (e) {
            console.log(e);
            setSuccess("");
            setError("Error sending email");
        }
    };

    return (
        <div className='flex h-screen w-screen flex-col'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-y-[20px] px-[20px] sm:px-[100px] md:px-[200px] lg:px-[300px] xl:px-[400px] 2xl:px-[600px]'>
                <div className='mt-[30px] flex w-full flex-col items-center justify-center gap-x-[20px] gap-y-[20px] lg:flex-row'>
                    <TextInput value={message.name} onChange={(v: string) => handleChange("name", v)} label='Name' />
                    <TextInput value={message.email} onChange={(v: string) => handleChange("email", v)} label='Email' />
                </div>
                <TextInput
                    value={message.subject}
                    onChange={(v: string) => handleChange("subject", v)}
                    label='Subject'
                />
                <TextInput
                    value={message.body}
                    onChange={(v: string) => handleChange("body", v)}
                    label='Message'
                    type='textarea'
                />
                <div
                    onClick={handleSend}
                    className='mt-[5px] flex h-[40px] w-full cursor-pointer flex-row items-center justify-center gap-x-[10px] rounded-sm bg-green-900 hover:bg-green-700'
                >
                    <p className='text-lg text-white'>Send</p>
                    <div className='mt-[1px] h-[17px] w-[17px] text-white'>{emailIcon}</div>
                </div>
                {success ? (
                    <div className='flex w-full flex-row justify-start text-sm text-green-300'>{success}</div>
                ) : (
                    <div className='flex w-full flex-row justify-start text-sm text-red-400'>{error}</div>
                )}
                <div className='mb-[30px] mt-[30px] flex w-full flex-row items-center justify-center'>
                    <div
                        onClick={() => navigate("/")}
                        className='h-[30px] w-[30px] cursor-pointer text-white hover:text-gray-400'
                    >
                        {homeIcon}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface TextInputProps {
    value: string;
    onChange: (v: string) => void;
    label: string;
    type?: "text" | "textarea";
}

function TextInput({ value, onChange, label, type = "text" }: TextInputProps) {
    const [text, setText] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className='flex w-full flex-col items-start justify-start'>
            <p className='mb-[5px] text-white'>{label}</p>
            {type === "text" ? (
                <input
                    className='h-[40px] w-full rounded-sm bg-gray-300 px-[10px] text-lg focus:outline-none active:outline-none'
                    value={text}
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    className='h-[200px] w-full rounded-sm bg-gray-300 px-[10px] py-[10px] text-lg focus:outline-none active:outline-none'
                    value={text}
                    onChange={handleChange}
                />
            )}
        </div>
    );
}
