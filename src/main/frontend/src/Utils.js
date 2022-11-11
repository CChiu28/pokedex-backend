function LoginToDB(info) {
    const obj = JSON.stringify(info);
    console.log(obj)
    fetch('http://localhost:8080/api/getUser', {
        method: 'GET',
        headers: {
            "Content-type":"application/json",
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${info.jwt}`
        },
    }).then(res => res.text()).then(data => console.log(data));
}

function formatText(text) {
    const newText = text.replaceAll('-',' ');
    return newText[0].toUpperCase()+newText.slice(1,newText.length);
}
export {
    LoginToDB,
    formatText
}