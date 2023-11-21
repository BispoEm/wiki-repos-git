import Input from "../Input";
import Button from "../Button";
import RepoItem from "../RepoItem";
import logo from "../assets/img/githubLogo.svg";
import { Container } from "./styles";
import { useState } from "react";
const App = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  let baseurl = "https://api.github.com/";
  
  const handleSearchRepo = async () => {
    const data = await (await fetch(`${baseurl}repos/${currentRepo}`)).json();
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      } else {
        alert("Este repositório ja foi adicionado");
      }
    } else {
      alert("Repositório não encontrado");
    }
  };
  const handleRemoveRepo = (id)=>{
    let newRepos = repos.filter((repositoryItem) => repositoryItem.id !== id)
    setRepos(newRepos)
  }
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <div className="header">
        <Input
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
        />
        <Button onClick={handleSearchRepo} />
      </div>
      {repos.map((repo) => (
        <RepoItem
          handleRemoveRepo={handleRemoveRepo}
          repo={repo}
        />
      ))}
    </Container>
  );
};

export default App;
