import { observable, computed } from "../node_modules/mobx/lib/mobx.es6.js";

class Store {
    private initalState = {};

    public constructor(initialState : object) {
        this.initalState = initialState;

        for (var key in this.initalState) {
            if (this.initalState.hasOwnProperty(key)) {
                console.log(key + " -> " + this.initalState[key]);
            }
        }
    }

    @observable numClicks = 0;
    @observable chris = "chris";

    @computed public oddOrEven() {
      return this.numClicks % 2 === 0 ? 'even' : 'odd';
    }

    @computed public update(property : string, value: any) {
        this[property] = value;
    }
  }
  
  const store = new Store({ "test" : "test" });
  
  export {
      store
  }