import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from "styled-components";
import { Component } from "react";
import nextId from "react-id-generator";

const SearchPanelSection = styled.section`
	display: flex;
		rgin: 1rem 0;
`;
const AppSection = styled.section`
	margin: 0 auto;
	max-width: 800px;
`;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{label: "Привет!", important: false, liked: false, id: "qwer",},
				{label: "Пока!", important: false, liked: false, id: "asdf",},
				{label: "До свидания!", important: false, liked: false, id: "zxcv",},
			],
			filterOnLiked: false,
			filterOnLabel: "",
			newLabelBody: "",
		};
	}

	deletePost = (key) => {
		this.setState(({ data }) => {
			const index = data.findIndex((item) => item.id === key);
			return { data: [...data.slice(0, index), ...data.slice(index + 1)] };
		});
	};

	inputNewLabel = (body) => {
		this.setState({ ...this.state, newLabelBody: body });
	};

	addPost = (body) => {
		if(!body){return}
		const newPostItem = {
			label: body,
			important: false,
			liked: false,
			id: nextId(),
		};
		this.setState(({ data }) => {
			return { data: [...data.slice(0), newPostItem], newLabelBody: ""};
		});
	};

	onLiked = (key) => {
		this.setState(({ data }) => {
			const index = data.findIndex((item) => item.id === key);
			const element = data[index];
			const newElement = { ...element, liked: !element.liked };
			return {
				data: [...data.slice(0, index), newElement, ...data.slice(index + 1)],
			};
		});
	};

	onImportant = (key) => {
		this.setState(({ data }) => {
			const index = data.findIndex((item) => item.id === key);
			const element = data[index];
			const newElement = { ...element, important: !element.important };
			return {
				data: [...data.slice(0, index), newElement, ...data.slice(index + 1)],
			};
		});
	};

	likedFilterOn = () => {
		this.setState({ ...this.state, filterOnLiked: true });
	};

	likedFilterOff = () => {
		this.setState({ ...this.state, filterOnLiked: false });
	};

	labelFilterOn = (body) => {
		this.setState({...this.state, filterOnLabel: body})
	};

	render() {
		return (
			<AppSection>
				<AppHeader
					totalPosts={this.state.data.length}
					likedPosts={this.state.data.filter((item) => item.liked).length}
				/>
				<SearchPanelSection>
					<SearchPanel
						labelFilterOn={this.labelFilterOn} 
					/>
					<PostStatusFilter
						likedFilterOn={this.likedFilterOn}
						likedFilterOff={this.likedFilterOff}
						filterOnLiked={this.state.filterOnLiked}
					/>
				</SearchPanelSection>
				<PostList
					posts={this.state.data}
					filterOnLiked={this.state.filterOnLiked}
					filterOnLabel={this.state.filterOnLabel}
					deletePost={this.deletePost}
					onLiked={this.onLiked}
					onImportant={this.onImportant}
				/>
				<PostAddForm
					addPost={this.addPost}
					inputNewLabel={this.inputNewLabel}
					newLabelBody={this.state.newLabelBody}
				/>
			</AppSection>
		);
	}
}
