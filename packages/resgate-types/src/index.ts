// Bem-vindo ao laboratório Hardcore de Types.
// Tudo o que for contrato entre API (Go) e o Frontend (React) morará aqui.

export type Coordinates = {
  lat: number;
  lng: number;
};

// Um exemplo clássico de tipagem rigorosa: Níveis de Criticidade.
export type ResourceLevel = 'CRITICAL' | 'WARNING' | 'OK';

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  cpf: string;
  isActive: boolean;
}

export type UpdateVolunteerInput = Partial<Omit<Volunteer, 'id'>>;

// Em breve, vamos aprofundar em Utility Types para mapear e transformar estas interfaces.
