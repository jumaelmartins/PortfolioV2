type input = {
  id: string;
  placeholder: string,
};

const Input = ({ id, placeholder }: input) => {
  return <input id={id} placeholder={placeholder} />;
};

export default Input;
