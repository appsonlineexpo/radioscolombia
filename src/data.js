import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"RCN radio",
            artist: "RCN radio",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://24083.live.streamtheworld.com/RCN_RADIO_FMAAC_SC",
            active: true,
        },
        {
            name:"BLU RADIO en vivo",
            artist: "BLU RADIO en vivo",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://17473.live.streamtheworld.com/BLURADIO_ADP_SC?dist=%252520blu_web",
            active: false,
        },
        {
            name:"Caracol Radio en vivo",
            artist: "Caracol Radio",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://18693.live.streamtheworld.com/CARACOL_RADIO_SC",
            active: false,
        },
        {
            name:"Olímpica Stereo ",
            artist: "Olímpica Stereo ",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://18693.live.streamtheworld.com/OLP_MEDELLINAAC_SC?dist=OlpMedWeb",
            active: false,
        },
        {
            name:"Bésame FM",
            artist: "Bésame FM",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://17493.live.streamtheworld.com/BESAME_MEDELLINAAC_SC?csegid=12000&dist=besame_co-web-live_streaming_play&pname=TDSdk",
            active: false,
        },
          {
            name:"Tropicana Cali en vivo",
            artist: "Bésame FM",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://26733.live.streamtheworld.com/TR_CALIAAC_SC?csegid=12000&dist=tropicana_co-web-live_streaming_play&pname=TDSdk",
            active: false,
        },
    ];
}

export default chillHop;


