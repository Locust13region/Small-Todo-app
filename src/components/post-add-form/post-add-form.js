import './post-add-form.css'

const PostAddForm = ({addPost, inputNewLabel, newLabelBody}) => {
	return (
		<div className='d-flex bottom-panel'>
			<input
				type='text'
				className='form-control new-post-label'
				placeholder='Что Вы думаете сейчас?'
				onChange={(e) => inputNewLabel(e.target.value)}
				value = {newLabelBody}
			/>
			<button 
				type='submit'
				className='btn btn-outline-secondary'
				onClick={() => addPost(newLabelBody)}>
				Добавить</button>
		</div>
	)
}

export default PostAddForm;