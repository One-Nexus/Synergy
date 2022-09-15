import getModifiersFromProps from './getModifiersFromProps';

export default function generateElementClasses(props, { 
  NAMESPACE, 
  GENERATECLASSES = true, 
  MODIFIERGLUE = "--", 
  SINGLECLASS = true
}) {
  let CLASSES = props.className ? props.className + ' ' : '', MODIFIERS = [];

  if (GENERATECLASSES) {
    props.modifiers && MODIFIERS.push(...props.modifiers);
    MODIFIERS = MODIFIERS.concat(getModifiersFromProps(props));
    MODIFIERS = MODIFIERS.filter((item, pos) => MODIFIERS.indexOf(item) === pos);
    MODIFIERS = MODIFIERS.filter(Boolean);

    if (SINGLECLASS) {
      NAMESPACE += MODIFIERS.length ? MODIFIERGLUE + MODIFIERS.join(MODIFIERGLUE) : '';
    } else {
      MODIFIERS.forEach(MODIFIER => CLASSES += NAMESPACE + MODIFIERGLUE + MODIFIER + ' ');
    }
  
    CLASSES += NAMESPACE
  }

  return CLASSES;
}