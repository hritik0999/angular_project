import { Action } from "@ngrx/store";

export const ADD_USERS = 'USERS[ADD]'

export class SubmitUserInformation implements Action{
    readonly type= ADD_USERS;

    constructor(public payload:any){}
}

export type Actions = SubmitUserInformation;