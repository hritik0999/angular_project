import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs/operators';
import { AppService } from "../service/app.service";
import { SubmitUserInformation } from './user.action';

export class UserEffect{
    constructor(private userService:AppService,private actions$ :Actions){

    }
    sendUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('USERS[ADD]'),
            mergeMap((action)=>{
                return this.userService.shareUserInfo(action.).pipe(
                    map((data)=>{
                        const userData = { ...action. }
                        return addUser({})
                    })
                )
            })
        )
    })

}

