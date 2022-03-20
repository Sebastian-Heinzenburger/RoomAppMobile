import { Dispatch, SetStateAction } from "react";

export async function getRooms(lesson: number, date: Date) {
    ///@ts-expect-error
    var url = `http://${global.address}/api/search`;

    try {
        ///@ts-expect-error
        let response = await fetch(url + `?token=${global.token}&date=${date.toDateString()}&lesson=${lesson}`)
        try {
            let text = await response.text()
            let r = JSON.parse(text);
            if (r.status == "ok")
                return r.rooms;
            else {
                alert("Konnte keine Räume abrufen: " + r.status);
                return [];
            }
        } catch (e) {
            alert("Konnte keine Daten vom Server empfangen: " + e);
            return [];
        }
    } catch (e) {
        alert("Konnte keine Verbindung zum Server aufbauen: " + e);
        return [];
    }
    // .catch (e => console.error("could not get data from the server: " + response.status))
    // .catch (e => console.error("could not connect to server"))
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function setLocationReq(location: string, onFinish: () => void) {
    //@ts-ignore
    var url = `http://${global.address}/api/setLocation`;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            await sleep(200)
            onFinish();
        }
    }

    ///@ts-expect-error
    xhr.send(`token=${global.token}&location=${location}`);

}

export async function getFriends() {
    ///@ts-expect-error
    var url = `http://${global.address}/api/getFriends`;

    try {
        ///@ts-expect-error
        let response = await fetch(url + `?token=${global.token}`)
        try {
            let text = await response.text()
            let r = JSON.parse(text);
            if (r.status == "ok")
                return { friends: r.friends, me: r.me };
            else {
                alert("Konnte keine Freunde abrufen: " + r.status);
                return false;
            }
        } catch (e) {
            alert("Konnte keine Daten vom Server empfangen: " + e);
            return false;
        }
    } catch (e) {
        alert("Konnte keine Verbindung zum Server aufbauen: " + e);
        return false;
    }
}

export async function addFriend(fcode: number|string, onSend: any): Promise<any> {

    //@ts-ignore
    var url = `http://${global.address}/api/addFriend`;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (JSON.parse(this.response).status == "ok")
                onSend(true);

            onSend(false);
            return false;
        }
    }

    ///@ts-expect-error
    xhr.send(`token=${global.token}&fcode=${fcode}`);
}

export async function getFriendRequests() {
    ///@ts-expect-error
    var url = `http://${global.address}/api/getFriendRequests`;

    try {
        ///@ts-expect-error
        let response = await fetch(url + `?token=${global.token}`)
        try {
            let text = await response.text()
            let r = JSON.parse(text);
            if (r.status == "ok")
                return { requests: r.requests };
            else {
                alert("Konnte keine Freundschaftsanfragen abrufen: " + r.status);
                return false;
            }
        } catch (e) {
            alert("Konnte keine Daten vom Server empfangen: " + e);
            return false;
        }
    } catch (e) {
        alert("Konnte keine Verbindung zum Server aufbauen: " + e);
        return false;
    }
}

export async function setFriendRequest(fid: number, action: "accept"|"deny") {
    //@ts-ignore
    var url = `http://${global.address}/api/setFriendRequest`;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(this.response)
        }
    }

    ///@ts-expect-error
    xhr.send(`token=${global.token}&fid=${fid}&action=${action}`);
}