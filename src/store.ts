import { observable, computed, extendObservable } from "../node_modules/mobx/lib/mobx.es6.js";

class Store {

    private state;

    public constructor(initialState : object) {

        this.state = observable.map();

        for (var key in initialState) {
            if (initialState.hasOwnProperty(key)) {
                this.state.set(key, initialState[key]);
            }
        }
    }

    @computed public isEven() {
      return this.state.get("numClicks") % 2 === 0 ? 'even' : 'odd';
    }

    @computed public update(property : string, value: any) {
        return this.state.set(property, value);
    }

    @computed public get(property : string, callback : Function) {
        if (callback) {
            return callback(this.state.get(property));
        }

        return this.state.get(property);
    }
  }
  
  const store = new Store({ name : "Alternative", numClicks: 0 });
  
  export {
      store
  }