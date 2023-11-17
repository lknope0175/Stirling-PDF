export interface Action {
    protected values: any;
    type: string;
    actions?: Action[];
}

export interface WaitAction extends Action {
    values: { id: number }
}

export interface ExtractAction extends Action {
    values: { indecies: string | number[] }
}

export interface ImposeAction extends Action {
    values: { nup: number, format: string }
}

export interface WaitAction extends Action {
    values: { id: number }
}