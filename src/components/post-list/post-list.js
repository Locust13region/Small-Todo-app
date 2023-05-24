import "./post-list.css";
import PostlistItem from "../post-list-item";

const PostList = ({
	posts,
	filterOnLiked,
	filterOnLabel,
	deletePost,
	onLiked,
	onImportant,
}) => {
	const elements = posts
		.filter((item) => {
			if (filterOnLiked) {
				return typeof item === "object" && !Array.isArray(item) && item.liked;
			} else {
				return typeof item === "object" && !Array.isArray(item);
			}
		})
		.filter((item) => {
			if(!filterOnLabel){
				return true
			}else{
				return (item.label.toLowerCase().includes(filterOnLabel.toLowerCase()))
			}
		})
		.map((item) => {
			const { id, ...postProps } = item;
			return (
				<li key={id} className="list-group-item">
					<PostlistItem
						{...postProps}
						deletePost={() => deletePost(id)}
						onLiked={() => onLiked(id)}
						onImportant={() => onImportant(id)}
					/>
				</li>
			);
		});
	return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
