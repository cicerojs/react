import { api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiException"

export interface ITarefa{
    id: number,
    title: string,
    isCompleted: boolean
} 

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const {data} = await api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar os registros')
    }
}

const getById    = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const {data} = await api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar o registro')
    }
}

const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const {data} = await api().post<any>('/tarefas', dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar um registro')
    }
}

const updateById = async (id: string, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try {
        const {data} = await api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar o registro')
    }
}
const deleteById = async (id: string): Promise<undefined| ApiException> => {
    try {
        await api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao excluir o registro')
    }
}

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}