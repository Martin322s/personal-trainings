import classNames from "classnames";
import EventEmitter from "eventemitter3";
import Notification from "./Notification";


export default class Card extends EventEmitter {
    static get events() {
        return {
            ADD_TO_CART: "add_to_cart",
        };
    }

    static get types() {
        return {
            PEPPERONI: "pepperoni",
            MARGHERITA: "margherita",
            HAWAIIAN: "hawaiian",
        };
    }

    constructor({ type, price }) {
        super();

        this._type = type;
        this._price = price;

        this.notif = new Notification({ type, price });

        this.container = document.createElement("div");
        this.container.classList.add("card-container");
    }

    render() {
        const template = `
                      <div class="card type-${this._type} ${classNames({ "is-danger": this._type === Card.types.HAWAIIAN })}">
                        <div class="emoji">🍕</div>
                        <span class="type">${this._type}</span>
                      </div>
                          `;

        this.container.innerHTML = template;
        this.container.addEventListener("click", () => {

            const a = this.emit(Card.events.ADD_TO_CART, {
                type: this._type,
                price: this._price,
            });

            this.notif.render()
        });
    }
}