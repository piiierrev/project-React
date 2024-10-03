import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { useState, useEffect } from 'react'
import Categories from './Categories'
import { plantList } from '../datas/plantList'
import Modal from './Modal'


function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	const [selectedPlantByCategory , updateSelectedPlantByCategory ] = useState(plantList)
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalText, setModalText] = useState("");

		
	useEffect(() => {
		console.log("mise a jour de cart en local storage")
		window.localStorage.setItem("cart", JSON.stringify(cart))
	 },[cart])

	


	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<div className="lmj-affichage">
					<Categories 
						selectedPlantByCategory={selectedPlantByCategory}
						updateSelectedPlantByCategory={updateSelectedPlantByCategory}
					/>
					<ShoppingList 
						cart={cart}
						updateCart={updateCart}
						selectedPlantByCategory={selectedPlantByCategory}
						updateSelectedPlantByCategory={updateSelectedPlantByCategory}
						setModalText={setModalText}
						setIsModalOpen={setIsModalOpen}
					/>
				</div>
			</div>
			<Modal isModalOpen={isModalOpen} modalText={modalText} onClose={()=> setIsModalOpen(false)}/>
			<Footer />
		</div>
	)
}

export default App