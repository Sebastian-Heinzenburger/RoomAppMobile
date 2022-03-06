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

function sleep(ms: number) {
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
            console.log(this.response);
        }
    }

    ///@ts-expect-error
    xhr.send(`token=${global.token}&location=${location}`);

}