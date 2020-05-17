import moment from 'moment';
import sortBy from 'lodash/sortBy';

export const getValidateMessages = (validation) => Object.values(validation).flat(Infinity);

export const getFormattedDate = (date) => moment(date).format('DD/MM/YYYY HH:mm');

export const sortDescByDate = (list) => sortBy(list, (note) => note.date).reverse();
