import path from "path";
import fs from "fs";

const dir_home = process.env[process.platform == `win32` ? `USERPROFILE` : `HOME`];
const dir_desktop = path.join(dir_home, `Desktop`);//デスクトップパス
const nodeProcess = async (message) =>{
    const res = await (() =>{
        return new Promise((resolve,reject)=>{
            fs.writeFile(`${dir_desktop}/message.txt`,message,(err)=>{
                if(err)reject(err);
                resolve("success");
            });
        });
    })().catch(e => console.log(e));

    console.log(res);
}

export default nodeProcess;


