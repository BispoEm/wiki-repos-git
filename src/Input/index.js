import { InputContainer } from "./styles";
const Input = ({value, onChange}) => {
  return (
    <InputContainer>
      <input placeholder="username/repositorio" value={value} onChange={onChange}/>
    </InputContainer>
  )
}
export default Input;
