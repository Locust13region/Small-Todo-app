import './post-status-filter'
import { Button, ButtonGroup } from 'reactstrap';


const PostStatusFilter = ({likedFilterOff, likedFilterOn, filterOnLiked}) => {
	// let btnColor = 'color="info"';
	// let btnOutline = 'outline';
	
	return (
			<ButtonGroup>
 				<Button 
					// color='info'
					color={(filterOnLiked)? "secondary":"info"}
					outline={(filterOnLiked)? true:false}
					type='button'
					onClick={likedFilterOff}
				>Все</Button>
				<Button 
					color={(!filterOnLiked)? "secondary":"info"}
					outline={(!filterOnLiked)? true:false}
					type='button'
					onClick={likedFilterOn}
				>Понравилось</Button>
			</ButtonGroup>
	)
}	

export default PostStatusFilter;