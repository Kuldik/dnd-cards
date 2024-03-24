export interface IState {
    result: string
    destination: string
    source: string
    draggableId: number
}

export interface IStateData extends Omit<IState, 'result'> {

}