interface AudioPlayer{
    audioVolume:number,
    songDuration:number,
    song:string,
    details:Details,
}
interface Details{
    author:string,
    year:number,
}
const detailsSong:Details = {
    author:'Ed Sheeran',
    year:2015,
}
const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:detailsSong,
}



const  {song:anotherSong,songDuration:duration}=audioPlayer;
const {author:author,year:year}=detailsSong;
console.log('Song:',anotherSong);
console.log('Duration:',duration);
console.log('Author:',author);
console.log('Year:',year);


const [p1,p2,trunks = 'Not found']:string[]=['Goku','Vegeta','Trunk'];

console.error('Personaje 3:',trunks)

export{};