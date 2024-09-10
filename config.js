//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348084374365";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtnRU5SSVJudzF0b1B1UE5WYlJTTUtaeDM5R1hUektMNmR0NEtVZFhHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFWVUdEbFJmTlhBNCtWYm5IODZJMG95YW5vdGIxWVpxdTlhYlZIRUl3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTEVBVllCMjZkTEFkd2czeXZ5RmFPSHVYbUowWmU3bmtRYk91c2RycEdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrYmo4enZ4R0hnVnVQOEFPdThOdzZ0YTREREZTdHhMa1FpYVI0SWViY2hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQZEg1ZjBSS1EzSEtnb3NkU3QxNy85aXQ0dTl0L2V3dDJIVTJaUTE3bm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ildkc0U3b3FrYjFHRGhPRUJObjhlZDNoWVMveXJ3NWFDYzEvS1ZZK1YrekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtDZ3c5WklrRjcrTXhJZW0ybTdSYi8vK3NhbEIveDcyZndWUTFlN2cxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXRHbkZsc0JPanNLYUcyT2Rwc2JMTXB3bWM0STVXWXZzVjliWTBTRzYyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFqRDZLR0JmaUxnbk1kRTM2aFA3UCtMRmFNbWZNcjBhZ3JyekdDTUhhb05RL2Z6ZjBJaGRUWkxNc0VueUNVekNyWWY4Sno2Zm1QQkFuRkVEdzE1MWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6IkRPbDdMMGJyWUc5dlVFSzh6L2wvWjlaaUoxKytmdmlUOURNUG1hOEQ4b0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA4NDM3NDM2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTFEQjM0MTMwRDkxRDhBMEYxQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1OTg4NzgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDg0Mzc0MzY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNEY1RUJDMTVEMjdBMzY0MjBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU5ODg3ODJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjgtZmkwUE1QUU4ya1pvSFo0eU0zbWciLCJwaG9uZUlkIjoiNGYxYmM2YzctMzE5ZC00ODFjLWFiYWMtNjVjODVlZGRkMjlkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhBdEdheW9lZHlVZEVoZ1hFZVpoR2VWdG05UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSSXp5eFZGQ0ZveitXT3E5eDkySG53SSs3T2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVlI4M01SQ0UiLCJtZSI6eyJpZCI6IjIzNDgwODQzNzQzNjU6NzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGVucnkgTm8gTWVyY3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08rRzE3c0VFSnovZ2JjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkU0WS85M1dhWHJnSEYwQnRzZStiOXpDdkdSS3lJZ1ZlcUJIQVhVaVpWQm89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9hdTZOKzUrMEFnU0tJOUFjTmVNc3I1QUlKaTBHQWZTcXcrQldWZ2hhYmtSOWZEQVlFOUY5ZW5pRjFDSmtMRDVwSElLTXZaZVFKSGpRTURoUXdVV0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0UnBRTUl3SUx4RkhrYUcyRk5ZMUZYRXdRWm9DYjZNRCsvZzBDSERLMHNOWXlPYVpSK2IrdmlZS1dtZ0sxbFg1MllqVWoxTzRPMW42aEJqaGEwQ09pZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODQzNzQzNjU6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk9HUC9kMW1sNjRCeGRBYmJIdm0vY3dyeGtTc2lJRlhxZ1J3RjFJbVZRYSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTk4ODc3NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLbSsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
