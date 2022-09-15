export default function removeLucidProps(props) {
  const { as, name, styles, config, component, ...rest } = props;

  return rest;
}