import { FC, useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

type InitState = {
    title: string,
    price: string,
    img: string
}

const initState = {
    title: '',
    price: '',
    img: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<InitState>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPizza({ ...newPizza, [name]: value });

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, price, img } = newPizza;

        if (title && price && img) {
            addPizza({
                id: Date.now(),
                title,
                img,
                price: Number(price)
            });
            setNewPizza(initState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='title'
                placeholder='Название'
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                type="text"
                name='price'
                placeholder='Стоимость'
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                type="text"
                name='img'
                placeholder='Изображение'
                onChange={handleChange}
                value={newPizza.img}

            />
            <button type='submit'>
                + Добавить в меню
            </button>
        </form>
    )

}

export default AddPizzaForm;