export interface ITask {
    name?: string
    description?: string
    id?: string
    task?: string
    index?: number
}

export interface ITaskData extends Omit<ITask, 'id'> {
}