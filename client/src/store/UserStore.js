import {makeAutoObservable} from "mobx" ;

export default class UserStore {
    constructor() {
        this._isAuth = true
        this.user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsAuth(user) {
        this.user = user
    }

    
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}