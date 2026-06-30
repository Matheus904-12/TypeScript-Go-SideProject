// Dados dos usuarios
export interface VolunteerModel {
    id: string;
    name: string;
    email: string;
    cpf: string;
    isActive: boolean;
    createdAt: Date; 
}

// Omit
export type CreateVolunteerInput = Omit<VolunteerModel, 'id' | 'isActive' | 'createdAt'>;

// Pick - campos obrigatórios
export type VolunteerCardProps = Pick<VolunteerModel, 'name' | 'email'>;

// Partial - campos opcionais
export type UpdateVolunteerInput = Partial<CreateVolunteerInput>;