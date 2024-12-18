import axios from "axios";

export async function DoorRequest() {
    const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/close`;
    const headers = {
        apikey: import.meta.env.VITE_SUPABASE_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
        "Content-Type": "application/json",
    };

    try {
        await axios.post(url, {}, { headers });
        return;
    } catch (e) {
        return e;
    }
}
