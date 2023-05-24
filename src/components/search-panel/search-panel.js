import './search-panel.css'

const SearchPanel = ({labelFilterOn}) => {
	return (
		<div className="search-input">
			<input 
				className="form-control" 
				type="text"
				placeholder="Поиск по записям"
				onChange={(e) => {
					labelFilterOn(e.target.value)
				}}
			/>
		</div>
	)
}

export default SearchPanel;