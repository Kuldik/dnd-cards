export interface ITask {
    name: string
    description: string
    id: string
}

export interface ITaskData extends Omit<ITask, 'id'> {
}