import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Volunteer } from '@resgate/types';

const fetchActiveVolunteer = async (): Promise<Volunteer> => { // services/api
  const response = await axios.get<Volunteer>('http://localhost:8000/volunteer');
  return response.data; // conversor para json auto
};

function App() {
  const { data: volunteer, isLoading, isError, error } = useQuery({
    queryKey: ['activeVolunteer'], // nome unico para o cache dessa requisição
    queryFn: fetchActiveVolunteer, // busca de dados
    staleTime: 100 * 60 * 5, // tempo do dado no cache
  });

return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Resgate.io - Painel</h1>
      {/* React Query avisa quando está buscando na API */}
      {isLoading && <p>Buscando conexões via Satélite (Carregando)...</p>}
      
      {/* React Query avisa se o servidor Go caiu ou falhou */}
      {isError && <p style={{ color: 'red' }}>Erro na conexão: {error.message}</p>}
      {/* Só renderiza se tiver dado */}
      {volunteer && (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px'}}>
          <h2>Voluntario Ativo: {volunteer.name}</h2>
          <p><strong>Email:</strong> {volunteer.email}</p>
          <p><strong>Status:</strong> {volunteer.isActive ? 'Online no mapa' : 'Offline'}</p>
        </div>
      )}
    </div>
  );
}

export default App;