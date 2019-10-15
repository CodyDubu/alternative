import { observable, computed } from "../node_modules/mobx/lib/mobx.es6.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { initialState } from "../build/initialState.js";

type Component = {
    component: any,
    values: object,
    id: string
}

class Alternative {

    private state;
    private components : Array<Component> = [];

    // TODO dynamically iterate over props to assign values passed in.

    public constructor(initialState : object) {

        this.state = observable.map();

        for (var key in initialState) {
            if (initialState.hasOwnProperty(key)) {
                this.state.set(key, initialState[key]);
            }
        }
    }

    public registerComponent(component : Component) : void {
        this.components.push(component);
        
        for (let x = 0; x < this.components.length; x++) {
            render(this.components[x].component(this.state.get(this.components[x].values)), document.querySelector(this.components[x].id))
        }
    }

    public getComponents() : Array<Component> {
        return this.components;
    }

    public html = html;

    @computed public update(property : string, value: any) {
        this.state.set(property, value);
        
        for (let x = 0; x < this.components.length; x++) {
            render(this.components[x].component(this.state.get(this.components[x].values)), document.querySelector(this.components[x].id))
        }

        return;
    }

    @computed public get(property : string) {
        return this.state.get(property);
    }
  }

  const alternative = new Alternative(initialState);
  
  export {
      alternative
  }