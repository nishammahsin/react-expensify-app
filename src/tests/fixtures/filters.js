import moment from 'moment';

const filters = {
    text: '',
    sortBy: '',
    startdate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: '',
    startdate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };