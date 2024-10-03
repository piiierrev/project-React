
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import { useState } from 'react'

function ShoppingList({cart, updateCart, selectedPlantByCategory, setModalText,setIsModalOpen}) {
	console.log(selectedPlantByCategory)

    function addToCart(name,price){
        const currentPlanAdded = cart.find((plant)=>plant.name === name)
        if(currentPlanAdded){
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([...cartFilteredCurrentPlant,{name, price, amount:currentPlanAdded.amount +1}])
        }

        else{
            updateCart([...cart,{name,price,amount:1}])
        }

    }


    return (
        <div className='lmj-shopping-list'>
            
            <ul className='lmj-plant-list'>
                {selectedPlantByCategory.map(({ id, cover, name, water, light,price, description }) => (
                    <div key={id}>
                        <PlantItem 
                            cover={cover} 
                            name={name} 
                            water={water} 
                            light={light} 
                            description = {description}
                            setModalText={setModalText}
                            setIsModalOpen={setIsModalOpen}
                        />
                        <button onClick={() => addToCart(name,price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList