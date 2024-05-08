const fs = require('fs'); const { exec } = require('child_process');
import("node-fetch")
const fileToWatch = '/var/log/nginx/access.log';

fs.watch(fileToWatch, (event, filename) => { console.log("unk");

exec("tail -n 1 /var/log/nginx/access.log", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);


var paramsUser = {
    username: "DataWatch.",
    avatar_url: "",
    content: "",
    embeds: [
        {
            "title": "New Request:",
            "color": 16384229,
            "thumbnail": {
                "url": "",
            },
            "fields": [
                {
                    "name": "",
                    "value": stdout,
                    "inline": true
}]}]}
    
var paramsBot = {
    username: "DataWatch.",
    avatar_url: "",
    content: "",
    embeds: [
        {
            "title": "Likely Bot traffic detected:",
            "color": 16711680,
            "thumbnail": {
                "url": "",
            },
            "fields": [
                {
                    "name": "",
                    "value": stdout,
                    "inline": true
}]}]}

    if(stdout.includes("HTTP/1.1" | "Wget" | "scan" | "password" | "shadow")) {
        var params = paramsBot;
    }
    else {
        var params = paramsUser;
    }
    
        fetch('!!!!WEBHOOKURLHERE!!!!', {
        method: "POST",
        headers: {
                'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
        }).then(res => {
        console.log(res);
        })

});
});
