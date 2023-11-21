import { Container } from "./styles";
const RepoItem = ({repo, handleRemoveRepo}) => {
  const removeRepo = () =>{
    handleRemoveRepo(repo.id)
  }
  return (
    <Container>
      <div className="repositorios">
        <h3>{repo.name}</h3>
        <p>{repo.desciption}</p>
        <div className="buttons">
          <a href={repo.html_url} rel="noreferrer" target="_blank" className="ver">
            Ver Repositorio
          </a>
          <a href="#" rel="noreferrer" onClick={removeRepo} className="remove">
            Remover Repositorio
          </a>
        </div>
      </div>
    </Container>
  );
};
export default RepoItem;
