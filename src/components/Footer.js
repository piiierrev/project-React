import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <div>
                <input type="email" value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={() => checkValue(inputValue)}
                
                ></input>
                <button onClick={() => alert(inputValue)}>Envoyer 🚨</button>
            </div>
		</footer>
	)
}

function checkValue(inputValue){
if(!inputValue.includes('@')){
    alert("ceci n'est pas un format email")
    
}
}

export default Footer