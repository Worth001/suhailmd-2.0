const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349043703768";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_36_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHhkU0tETzB3eTl2aEdrS3dKSlllcmlEeWVsSWJ6cnNHem5XTlozRnJOdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiblZpMDg1eUpTU2VIRDdnRWJkaElad1wiLFxuICBcInBob25lSWRcIjogXCJhYTJhYzU5MS03MDA3LTQzZWItYTMwOS03MDc5ZmNhNGZlMTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgMjIwLFxuICAgICAgMTA0LFxuICAgICAgNjMsXG4gICAgICAxMjYsXG4gICAgICAyNDYsXG4gICAgICAzMyxcbiAgICAgIDI1LFxuICAgICAgMjE0LFxuICAgICAgMTczLFxuICAgICAgMjA5LFxuICAgICAgMjA5LFxuICAgICAgNzUsXG4gICAgICAxMzMsXG4gICAgICAxMDcsXG4gICAgICAxOTIsXG4gICAgICAyMzAsXG4gICAgICAyMDYsXG4gICAgICAyMDUsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDEzMyxcbiAgICAgIDkzLFxuICAgICAgNjMsXG4gICAgICAxNDYsXG4gICAgICAxMDQsXG4gICAgICAxNTEsXG4gICAgICA0NyxcbiAgICAgIDEyMSxcbiAgICAgIDIxOSxcbiAgICAgIDYsXG4gICAgICAyMjIsXG4gICAgICA5NixcbiAgICAgIDE4NixcbiAgICAgIDI4LFxuICAgICAgMjI0LFxuICAgICAgMTEzLFxuICAgICAgNzAsXG4gICAgICAyNDcsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUOTdWOFdITVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0MzcwMzc2ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV29ydGggUGV0ZXJcIixcbiAgICBcImxpZFwiOiBcIjE0MzI2MzQ4Mjc3NzY3Nzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmMzdOY0JFSkRseUxrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnBzRDlmNDRWNzBIdy9OdjZlSVZHN01lUXNsOWRVZFozeGoyL3FZYVV3TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhLzBmL0hyMWsrMHJYR1d4T3pmZnc4cGJYNEVQVTNITEt4aFVHaHdLME5NOUlHeXY0VDV4MVRCekgrT0tRSEQ4QitCNGhZN3VuNzJiUkxzNGlvSk5CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJabnNDRVBacFJDOFVxeW9ySSsvbVBZV2ovV092TUxGZVZMRHVHdDMrRE1iNHhGQ0xQVlgvd1A3dnRUUVE4Z0QzYmVjTHpKbXhicytMc1VzN2lIdDlqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQzNzAzNzY4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzQyOTk2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
