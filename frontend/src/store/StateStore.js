import { makeAutoObservable } from "mobx"

export default class StateStore {
    constructor() {
        this._framework = {}
        
        makeAutoObservable(this)
    }


    setFramework(framework) {
        this._framework = framework
    }

    get framework() {
        return this._framework
    }
}