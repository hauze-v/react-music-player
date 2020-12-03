import { v4 as uuidv4 } from "uuid";
import aftergoldImg from "./images/aftergold_big_wild.jpg";
// import angstImg from "./images/angst_inzo.jpg";
// import overthinkerImg from "./images/overthinker_inzo.jpg";
// import fairytaleImg from "./images/fairy_tale_ekali.jpg";
// import griztronicsImg from "./images/griztronics.jpg";
// import hardToSayGoodByeImg from "./images/hard_to_say_goodbye_ekali.jpg";
// import lastToLeaveImg from "./images/last_to_leave_louis_the_child.jpg";
// import lateNightImg from "./images/late_night_odesza.jpg";
// import losingItImg from "./images/losing_it_fisher.jpg";
// import magnetsImg from "./images/magnets_zeds_dead.jpg";
// import onlyNowImg from "./images/only_now_seven_lions.jpg";
// import rememberMeImg from "./images/remember.jpg";
// import promisesImg from "./images/promises_nero.jpg";

function chillHop() {
  return [
    {
      id: uuidv4(),
      audio: "./music/Aftergold.mp3",
      cover: { aftergoldImg },
      time: "03:50",
      name: "Aftergold",
      artist: "Big Wild",
      color: ["#205950", "#2ab3bf"],
      active: true,
    },
    {
      id: uuidv4(),
      audio: "./music/Angst.mp3",
      cover:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrillvo.files.wordpress.com%2F2019%2F11%2Finzo-angst.jpg&f=1&nofb=1",
      time: "03:17",
      name: "Angst",
      artist: "Inzo",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Overthinker.mp3",
      cover:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thissongslaps.com%2Fwp-content%2Fuploads%2F2018%2F08%2Finzo-new-original-overthinker-thissongslaps.jpg&f=1&nofb=1",
      time: "04:34",
      name: "Overthinker",
      artist: "Inzo",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Fairy_Tale.mp3",
      // cover: { fairytaleImg },
      time: "04:16",
      name: "Fairly Tale",
      artist: "Ekali",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Griztronics.mp3",
      // cover: { griztronicsImg },
      time: "03:19",
      name: "Griztronics",
      artist: "Subtronics",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Hard_to_say_goodbye.mp3",
      // cover: { hardToSayGoodByeImg },
      time: "03:17",
      name: "Hard to Say Goodbye",
      artist: "Ekali",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Last_to_leave.mp3",
      // cover: { lastToLeaveImg },
      time: "03:00",
      name: "Last to Leave",
      artist: "Louis The Child",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Late_night.mp3",
      // cover: { lateNightImg },
      time: "03:48",
      name: "Late Night",
      artist: "Odesza",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Losing_it.mp3",
      // cover: { losingItImg },
      time: "06:41",
      name: "Losing It",
      artist: "Fisher",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Magnets.mp3",
      // cover: { magnetsImg },
      time: "04:19",
      name: "Magnets",
      artist: "Zeds Dead",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Only_now.mp3",
      // cover: { onlyNowImg },
      time: "03:31",
      name: "Only Now",
      artist: "Seven Lions",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Remember.mp3",
      // cover: { rememberMeImg },
      time: "05:14",
      name: "Remember",
      artist: "Seven Lions",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      audio: "./music/Promises.mp3",
      // cover: { promisesImg },
      time: "04:28",
      name: "Promises",
      artist: "Skrillex",
      color: ["#205950", "#2ab3bf"],
    },
  ];
}

export default chillHop;
