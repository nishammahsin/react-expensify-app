import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby to amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filterReducers(currentState, { type: 'SORT_BY_DATE' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter to provided value', () => {
    const state = filterReducers(undefined, { type: 'SET_TEXT_FILTER' , text: 'abc'});
    expect(state).toEqual({
        text: 'abc',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set start date to provided stateart d', () => {
    const state = filterReducers(undefined, { type: 'SET_START_DATE' , startDate: moment(0)});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    });
});

test('should set END date to provided END DATE', () => {
    const state = filterReducers(undefined, { type: 'SET_END_DATE' , endDate: moment(0)});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(0)
    });
});