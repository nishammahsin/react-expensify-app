import moment from 'moment';
import { 
        setStartDate, 
        setEndDate,
        setTextFilter,
        sortByAmount,
        sortByDate
    } from '../../actions/filters';

test('Should generate setstart date   action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
    });
});

test('Should generate set end date  action object', () => {
    const endDate = moment(0);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
    });
});

test('Should generate settext filter action object with provide value', () => {
    const text = 'rent';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate settext filter action object with deafult value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('Should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});