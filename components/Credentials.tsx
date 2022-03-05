import { deleteAsync, documentDirectory, EncodingType, readAsStringAsync, writeAsStringAsync } from "expo-file-system";

export async function isLoggedIn() {
    //@ts-ignore
    if (global.token)
        return true;

    let token: string|boolean = false;
    try {
        token = await readAsStringAsync(documentDirectory + `token`);
    } catch { return false; }

    if (token) {
        //@ts-ignore
        global.token = token;
        return token;
    }
    return false;
}

export async function storeToken(token: string) {
    let uri = documentDirectory + `token`;
    try {
        await writeAsStringAsync(uri, token, { encoding: EncodingType.UTF8 })
    } catch {
        alert("Could not write to storage")
    }
    //@ts-ignore
    global.token = token;
}

export async function signOut() {
    //@ts-ignore
    global.token = undefined;
    await deleteAsync(documentDirectory + `token`);
}
