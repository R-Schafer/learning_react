// example of .then fetch
import React from "react";

const [allMemes, setAllMemes] = React.useState([]);

React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => setAllMemes(data.data.memes));
}, []);

// example of async/await fetch

const [allMemes, setAllMemes] = React.useState([]);

React.useEffect(() => {
  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data.data.memes);
  }
  getMemes();
}, []);
