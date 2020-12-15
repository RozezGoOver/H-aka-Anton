import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import List from '@vkontakte/vkui/dist/components/List/List';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Аккаунт</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Button size="x0.75" level="2" onClick={go} data-to="persik">
					Персональная статистика
				</Button>
		</Group>}

   <Group header={<Header mode="secondary"></Header>}>
            <Cell onClick={go} data-to="team" expandable before={<Icon28Users />}>Статистика команды</Cell>
              <Cell onClick={go} data-to="newsfeed" expandable before={<Icon28Newsfeed />}>Новости</Cell>
              <Cell onClick={go} data-to="ivent" expandable before={<Icon28TargetOutline />}>Турниры</Cell>
            </Group>
			<Group>
              <Header mode="secondary">Настройки</Header>
              <Cell disabled after={<Switch defaultChecked />}>Сжимать фотографии</Cell>
              <Cell disabled after={<Switch />}>Сжимать видео</Cell>
            </Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
