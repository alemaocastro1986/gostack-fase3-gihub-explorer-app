import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';
import appLogo from '../../assets/logo.svg';

import apiClient from '../../services/apiClient';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState('');
  const [repositoryError, setRepositoryError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@GitExplorer:repositories'
    );

    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (!repository) {
      setRepositoryError('Digite um autor/nome do repositório');
      return;
    }
    try {
      const { data } = await apiClient.get<Repository>(`repos/${repository}`);
      setRepositories([...repositories, data]);
      setRepository('');
      setRepositoryError('');
    } catch (err) {
      setRepositoryError('Erro na busca por este repositório');
    }
  }

  return (
    <>
      <img src={appLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!repositoryError} onSubmit={handleAddRepository}>
        <input
          value={repository}
          onChange={e => setRepository(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {repositoryError && <Error>{repositoryError}</Error>}
      <Repositories>
        {repositories.map(repo => (
          <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
