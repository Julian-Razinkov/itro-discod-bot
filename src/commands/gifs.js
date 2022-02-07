
const gifs = [
    "https://c.tenor.com/BSYeNq2POsQAAAAM/gachimuchi.gif",
    "https://c.tenor.com/8iMyvddJvmIAAAAd/gachimuchi-steve-rambo.gif",
    "https://c.tenor.com/BSnn_D2LLbsAAAAd/billy-herrington-billy-herrington-drinks-beer.gif",
    "https://c.tenor.com/NkmwDOjRi24AAAAM/gachi.gif",
    "https://c.tenor.com/UI-GL0zafBoAAAAM/slave-gachimuchi.gif",
    "https://c.tenor.com/bB0sNG4Q7U8AAAAM/billy-gachimuchi.gif",
    "https://thumbs.gfycat.com/SoggyRemarkableAddax-max-1mb.gif",
    "https://c.tenor.com/xizbYp13rqEAAAAd/gachi-gachimuchi.gif",
    "https://c.tenor.com/NZGggjysqjwAAAAM/hehe-not-hehe.gif",
    "https://c.tenor.com/_CL71hf-Q0UAAAAd/%D0%BC%D0%B5%D0%B3%D0%B0%D1%85%D0%B0%D1%80%D0%BE%D1%88%D0%BE%D1%81%D1%82%D1%80%D1%8B%D0%B5%D0%BA%D0%BE%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%B8.gif",
]; 

const gifHandler = async (message) => {    
            const i = Math.floor(Math.random() * gifs.length);
            const replyGif = gifs[i];
            await message.reply(replyGif);
} 

module.exports = gifHandler