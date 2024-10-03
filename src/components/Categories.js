import { useState } from 'react'
import { plantList } from '../datas/plantList'
import '../styles/Categories.css'

function Categories ({updateSelectedPlantByCategory}){
    
    const [selectedOption, updateSelectedOption] = useState("")
    
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
        )

    function updateCategory(cat){
        updateSelectedOption(cat)
        
        
        const updatedPlantList = plantList.filter((plant) =>plant.category === cat )
        console.log("plantListUpdated :" + updatedPlantList)
        updateSelectedPlantByCategory(updatedPlantList);
    }

    return (
        <div className='ongletCategory'>
            <select className="selectCategory" value = {selectedOption} onChange={(event)=>updateCategory(event.target.value)}>
                /* Option par défaut visible seulement si aucune option n'a été sélectionnée */
                {selectedOption === "" && (
                    <option value="">--Faites votre choix--</option>
                )}
                {categories.map((cat) => (
                <option key={cat}>
                    {cat}
                </option>
                ))}
            </select>

            <button onClick={()=>{
                                updateSelectedPlantByCategory(plantList);
                                updateSelectedOption("")
                                }
                            } >Réinitialiser</button>
           
        </div>
    )

function updateCategorie(){

}


}

export default Categories