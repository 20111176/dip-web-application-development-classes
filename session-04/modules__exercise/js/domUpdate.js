export const pi=3.1415926535;
export function getArea(radius){
    return pi * Math.pow(radius,2);
}

function getVolume(radius){
    return 4/3 * pi * Math.pow(radius,3);
}
function getCircumference(radius){
    return 2 *pi * radius;
}
export {getVolume, getCircumference};
