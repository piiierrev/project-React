import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => careScaleClick(careType, scaleValue)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function careScaleClick(careType, scaleValue){
    console.log(scaleValue)
    const valueText = ["peu", "moderement", "beaucoup"]
    if (careType === "water"){
       alert(`Cette plante necessite ${valueText[scaleValue-1]} d'eau`)
}
    else {
        alert(`Cette plante necessite ${valueText[scaleValue-1]} de lumiere`)
    }
}

export default CareScale