export const fetchSettings = async () => {
    const response = await fetch('');
    if (!response.ok) throw new Error("Failed to fetch Settings");
    
    const json = await response.json();

    if (json.data)
        return json.data;

    return null;
}
