import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, description, light,setModalText,setIsModalOpen }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}>
			
			<img 
				className='lmj-plant-item-cover' 
				src={cover} 
				alt={`${name} cover`}
				onClick={()=>{
					setModalText(description);
					setIsModalOpen(true)}}
			/>

			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(plantName) {
    // const plante = plantName
    // alert(`Vous voulez acheter 1 ${plante} ? Très bon choix 🌱✨`)
}

export default PlantItem