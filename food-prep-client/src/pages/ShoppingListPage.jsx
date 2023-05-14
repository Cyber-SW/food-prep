import Navbar from "../components/Navbar"
import { useState } from "react"

function ShoppingListPage() {
    const [shoppingList, setMealShoppingList] = useState([])
    const [currentIngredient, setCurrentIngredient] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleCurrentIngredient = (e) => setCurrentIngredient(e.target.value)
    const handleClick = () => { handleAddIngredient() }
    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleAddIngredient()
        }
    }

    function handleAddIngredient() {
        if (currentIngredient && !shoppingList.includes(currentIngredient)) {
            setMealShoppingList([...shoppingList, currentIngredient])
            setCurrentIngredient("")
        }
        if (shoppingList.includes(currentIngredient)) {
            setErrorMessage("This ingredient is already banned.")
        }
    }


    return (
        <div>
            <Navbar />

            <h1>Shopping list</h1>

            <h2>Add items to your shopping list</h2>
                <input type="text" name="shopping-list" value={currentIngredient} onChange={handleCurrentIngredient} onKeyDown={handleKey} />
                <button type="button" onClick={handleClick}>Add ingredient</button>

            <ul>
                    { shoppingList.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                { errorMessage && <p className="error-message">{errorMessage}</p> }
        </div>
    )
}

export default ShoppingListPage