export default function getParam(property) {
    if (property.match(/\((.*?)\)/)) {
        return property.match(/\((.*?)\)/)[1].replace(/'/g,'');
    }
    if (property.match(/\[(.*?)\]/)) {
        return property.match(/\[(.*?)\]/)[1];
    }
    if (property.indexOf('-') === 0) {
        return property.slice(1);
    }
}