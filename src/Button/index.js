import { ButtonComponent } from "./styles";
const Button = ({onClick}) => {
  return (
    <ButtonComponent onClick={onClick}>
      Buscar
    </ButtonComponent>
  )
}
export default Button;
