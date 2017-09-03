import React from 'react';
// import renderer from 'react-test-renderer';
// Can't have renderer and enzyme in the same import
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// run with -u flag to reset Snapshot (otherwise it's just the first snapshot from the first time it ran)
// Do check-in the Snapshots to git so the tests run the same for everyone. (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧

// renderer version:
// test('Search renders correctly', () => {
// 	const component = renderer.create(<Search />);
// 	const tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();
// });
describe('Search', () => {
	const component = shallow(<Search />);

	it('Search renders correctly', () => {
		// const component = shallow(<Search />);
		expect(component).toMatchSnapshot();
	});

	it('Search should render correct amount of shows', () => {
		// const component = shallow(<Search />);
		expect(component.find(ShowCard).length).toEqual(preload.shows.length);
	});

	it('Search should render correct amount of shows based on search term', () => {
		const searchWord = 'black';
		// const component = shallow(<Search />);
		component.find('input').simulate('change', { target: { value: searchWord } });
		const showCount = preload.shows.filter(
			show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
		).length;
		expect(component.find(ShowCard).length).toEqual(showCount);
	});
});
