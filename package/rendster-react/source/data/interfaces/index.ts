// #region exports
export type RendsterComponentControllerType = 'text' | 'number' | 'boolean';

export type RendsterComponentControllerObject = {
    type: 'text';
    name: string;
    value?: string;
} | {
    type: 'number';
    name: string;
    value?: number;
} | {
    type: 'boolean';
    name: string;
    value?: boolean;
}

export type ControllerValue<Type extends RendsterComponentControllerType> =
    Extract<Type, 'text'> extends 'text' ? string
        : Extract<Type, 'number'> extends 'number' ? number
            : Extract<Type, 'boolean'> extends 'boolean' ? boolean
                : never;

export type RendsterComponentControllerTuple = [
    'text',
    string,
    string,
] | [
    'number',
    string,
    number,
] | [
    'boolean',
    string,
    boolean,
];

export type RendsterComponentControllerTupleWithoutValue = [
    RendsterComponentControllerType,
    string,
];

export type RendsterComponentController =
    | RendsterComponentControllerObject
    | RendsterComponentControllerTuple
    | RendsterComponentControllerTupleWithoutValue;


export interface RendsterComponentContext {
    registerControllers: (
        id: string,
        controllers: RendsterComponentController[],
    ) => void;
    addToGroup: (
        id: string,
        group: string,
    ) => void;
}


export interface RendsterGroup {
    name: string;
    components: string[];
}
// #endregion exports
