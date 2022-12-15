import { formatCurrency } from "./utils";
import classNames from "classnames";
export default class Notification {
    static get types() {
        return {
            PEPPERONI: "pepperoni",
            MARGHERITA: "margherita",
            HAWAIIAN: "hawaiian",
        };
    }

    constructor() {
        this.container = document.createElement("div");
        this.container.classList.add("notification-container");
        if (this._type === Notification.types.HAWAIIAN) {
            this.container.classList.add("is-danger");
        }
    }

    empty() {
        this.container.remove();
    }

    render({ type, price }) {
        const isHawaiian = type === Notification.types.HAWAIIAN;
        const cNames = classNames(`notification type-${type}`, { 'is-danger': isHawaiian });
        const template = `
      <div class="${cNames}">
        <button class="delete"></button>
        🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
      </div>
    `;

        this.container.innerHTML = template;
        const deleteButton = this.container.querySelector(".delete");
        deleteButton.onclick = () => this.empty();
    }
}