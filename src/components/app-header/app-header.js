import styled from 'styled-components';

const UserName = styled.h1`
	font-size: 26px;
`;
const UserPostsInfo = styled.h2`
	font-size: 1.2rem;
	color: grey;
`;
const HeaderSection = styled.section`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const AppHeader = ({totalPosts, likedPosts}) => {
	return (
		<HeaderSection>
			<UserName>Имя Пользователя</UserName>
			<UserPostsInfo>{totalPosts} записей, из них понравилось {likedPosts}</UserPostsInfo>
		</HeaderSection>
	);
}

export default AppHeader