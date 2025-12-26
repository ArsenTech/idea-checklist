import { useEffect, useState } from "react";
import {getTauriVersion, getVersion} from "@tauri-apps/api/app"

export default function AboutTab(){
     const [version, setVersion] = useState({
          app: "",
          tauri: ""
     });
     useEffect(()=>{
          const loadVersion = async()=>{
               const appVersion = await getVersion();
               const tauriVersion = await getTauriVersion();
               setVersion({
                    app: appVersion,
                    tauri: tauriVersion
               })
          }
          loadVersion()
     },[])
     const year = new Date().getFullYear()
     return (
          <div className="flex gap-4 flex-col items-center justify-center text-center mt-3">
               <img src="/logo-mark.webp" alt="logo" className="rounded-xl" width={440} height={100}/>
               <h2 className="text-2xl text-primary font-semibold">Idea Checklist v{version.app}</h2>
               <p>An app for Tech YouTube Streamers to Note The Ideas Here and Test These Ideas on the Virtual Machine During Live Stream</p>
               <p>Originally built in Electron, now rewritten in Tauri for optimal performance.</p>
               <p className="text-muted-foreground">&copy; {year} ArsenTech. All Rights Reserved</p>
               <p className="text-muted-foreground">This app Was Made With Tauri v{version.tauri}</p>
          </div>
     )
}