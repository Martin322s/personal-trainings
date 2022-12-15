import { formatCurrency } from './utils'
import classNames from "classnames";


export default class Notification {
    static get types() {

        return {
            PEPPERONI: "pepperoni",
            MARGHERITA: "margherita",
            HAWAIIAN: "hawaiian",
        };
    }

    constructor({ type, price }) {
        this.type = type
        this.price = price

        this.container = document.createElement("div");
        this.container.classList.add("notification-container");
        document.querySelector(".notifications").appendChild(this.container);
    }

    empty(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', function () {
                this.parentElement.parentElement.innerHTML = ""
            })
        }
    }

    render({ type, price } = constructor) {

        const template = `
                      <div class="notification type-${this.type} ${classNames({ "is-danger": this.type === Notification.types.HAWAIIAN })}">
                        <button class="${classNames("delete")}"></button>
                        🍕 <span class="${classNames("type")}">${this.type}</span> (<span class="${classNames("price")}">${formatCurrency(this.price)}</span>) has been added to your order.
                      </div>
                          `;

        this.container.innerHTML = template;
        let arr = document.querySelectorAll('.delete')

        this.empty(arr)

    }
}