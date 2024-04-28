import $host from "./index.js";

export const getMethods = async () => {
    const {data} = await $host.get("api/methods/")
    return data;
}

