import { observable } from "../node_modules/mobx/lib/mobx.es6.js";
import * as store from "../build/store.js";


class State {
    
    private static instance: State;
    public store;

    private constructor() {
        this.store = observable(store);
    }

    public static getInstance(): State {
        if (!State.instance) {
            State.instance = new State();
        }

        return State.instance;
    }

    public getState = () => {
        return this.store();
    }
    
    public updateState = (newState : object) => {
        return {
            ...this.store(),
            ...newState
        }
    }
}

export {
    State
}