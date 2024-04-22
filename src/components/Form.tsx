import { ChangeEvent, FormEvent, useState } from "react"
import { categories } from "../data/category"
import { Activity } from "../types"

const Form = () => {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    console.log(activity)

    const handleChange = (e: ChangeEvent<HTMLInputElement |   HTMLSelectElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.name)

        setActivity({
            ...activity,
            [e.target.name]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = (): boolean => {
        const { category, name, calories } = activity;
        return category !== 3 && name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    }



    return (
        <form
            className="space-y-5 bg-white p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoría:</label>
                <select
                    name="category"
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    
                    {
                        categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name">Actividad:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej: Comida, Jugo de Naranja, Ensalada, Pesas"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories">Calorias:</label>
                <input
                    type="number"
                    name="calories"
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej: 300, 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 text-white font-bold py-2 rounded-sm w-full cursor-pointer hover:bg-gray-900 transition-all ease-out duration-300 hover:scale-105 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                value={activity.category === 1 ? 'Agregar Comida' : 'Agregar Ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}


export {
    Form
}