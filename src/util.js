import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;

// import { v4 as uuidv4 } from "uuid";

// function chillHop() {
//   return [
//     {
//       id: uuidv4(),
//       audio: "./music/Aftergold.mp3",
//       cover: "./images/aftergold_big_wild.jpg",
//       time: "03:50",
//       name: "Aftergold",
//       artist: "Big Wild",
//       color: ["#205950", "#2ab3bf"],
//       active: true,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Angst.mp3",
//       cover:
//         "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrillvo.files.wordpress.com%2F2019%2F11%2Finzo-angst.jpg&f=1&nofb=1",
//       time: "03:17",
//       name: "Angst",
//       artist: "Inzo",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Overthinker.mp3",
//       cover:
//         "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thissongslaps.com%2Fwp-content%2Fuploads%2F2018%2F08%2Finzo-new-original-overthinker-thissongslaps.jpg&f=1&nofb=1",
//       time: "04:34",
//       name: "Overthinker",
//       artist: "Inzo",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Fairy_Tale.mp3",
//       // cover: { fairytaleImg },
//       time: "04:16",
//       name: "Fairly Tale",
//       artist: "Ekali",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Griztronics.mp3",
//       // cover: { griztronicsImg },
//       time: "03:19",
//       name: "Griztronics",
//       artist: "Subtronics",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Hard_to_say_goodbye.mp3",
//       // cover: { hardToSayGoodByeImg },
//       time: "03:17",
//       name: "Hard to Say Goodbye",
//       artist: "Ekali",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Last_to_leave.mp3",
//       // cover: { lastToLeaveImg },
//       time: "03:00",
//       name: "Last to Leave",
//       artist: "Louis The Child",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Late_night.mp3",
//       // cover: { lateNightImg },
//       time: "03:48",
//       name: "Late Night",
//       artist: "Odesza",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Losing_it.mp3",
//       // cover: { losingItImg },
//       time: "06:41",
//       name: "Losing It",
//       artist: "Fisher",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Magnets.mp3",
//       // cover: { magnetsImg },
//       time: "04:19",
//       name: "Magnets",
//       artist: "Zeds Dead",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Only_now.mp3",
//       // cover: { onlyNowImg },
//       time: "03:31",
//       name: "Only Now",
//       artist: "Seven Lions",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Remember.mp3",
//       // cover: { rememberMeImg },
//       time: "05:14",
//       name: "Remember",
//       artist: "Seven Lions",
//       color: ["#205950", "#2ab3bf"],
//       active: false,
//     },
//     {
//       id: uuidv4(),
//       audio: "./music/Promises.mp3",
//       // cover: { promisesImg },
//       time: "04:28",
//       name: "Promises",
//       artist: "Skrillex",
//       color: ["#205950", "#2ab3bf"],
//     },
//   ];
// }

// export default chillHop;
