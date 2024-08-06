import { getCircumference, getVolume as vol } from "./domUpdate";

export function onClick(textBoxID, displayID){
    let radiusText=document.getElementById(textBoxID).value;
    document.getElementById(displayID).innerHTML=getCircumference(radiusText);
}
export function onClick2(textBoxID, displayID){
    let radiusText=document.getElementById(textBoxID).value;
    document.getElementById(displayID).innerHTML=vol(radiusText);
}