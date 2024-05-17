import { FC } from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
    return (
        <div className="container">
            {pizzasList.map(pizza => {
                return <SinglePizza updatePizza={updatePizza} key={pizza.id} pizza={pizza} deletePizza={deletePizza} />;
            })}
        </div>
    )
}


export default DisplayPizzas;