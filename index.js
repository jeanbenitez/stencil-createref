export default () => {
  const fn = (current) => {
    fn.current = current;
  };
  fn.current = null;
  return fn;
};
