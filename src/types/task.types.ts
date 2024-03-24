export interface ITask {
    name?: string
    description?: string
    id?: string
    task?: string
    index?: number
    inProcess?: boolean
    updatedTask?: boolean
}

export interface ITaskData extends Omit<ITask, 'id'> {
}