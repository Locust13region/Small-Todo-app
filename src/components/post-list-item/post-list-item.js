import { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
	render() {
		const { label, liked, important, deletePost, onLiked, onImportant } =
			this.props;
		
		let classNames = "app-list-item d-flex justify-content-between";

				if (important) {
			classNames += " app-list-item-important";
		}
		if (liked) {
			classNames += " app-list-item-like";
		}
		return (
			<div className={classNames}>
				<span onClick={onLiked} className="app-list-item-label">
					{label}
				</span>
				<div className="d-flex justify-content-center align-iems-center">
					<button
						type="button"
						className="btn-star btn-sm"
						onClick={onImportant}
					>
						<i className="bi bi-star-fill" />
					</button>
					<button
						type="button"
						className="btn-trash btn-sm"
						onClick={deletePost}
					>
						<i className="bi bi-trash" />
					</button>
					<i className="bi bi-heart-fill fa-heart" />
				</div>
			</div>
		);
	}
}
