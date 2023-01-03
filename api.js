const axios = require("axios");

axios("https://api.imgflip.com/get_memes")
  .then((response) => {
    // console.log(response.data.data);
    const { memes } = response.data.data;
    let sum = 0;
    //   memes.map( ( b ) =>
    //   {
    //       const { box_count } = b;
    //       sum+=box_count

    //   } )
    for (let meme of memes) {
      const { box_count } = meme;
      sum += box_count;
    }
    // for (let i = 0; i < memes.length; i++) {
    //   const { box_count } = memes[i];
    //   sum += box_count;
    // }
    console.log(sum);
  })
  .catch((err) => {
    console.log(err);
  });
