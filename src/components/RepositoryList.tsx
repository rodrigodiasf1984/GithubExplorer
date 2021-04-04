import {useState, useEffect} from 'react';
import {RepositoryItem} from './RepositoryItem';
import '../styles/repositories.scss';
import {Repository} from '../@types/index';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos').
    then(resp=>resp.json()).then(data =>setRepositories(data));    
  },[]);
  
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>        
        {repositories?.map(repository => (
            <RepositoryItem key={repository.name} repository={repository}/>      
          )
        )}
      </ul>
    </section>
  )
}