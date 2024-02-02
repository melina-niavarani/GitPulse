import * as moment from 'moment';

export const calculateUpdateLabel = (updateDate) => {
    const today = moment();
    const lastUpdate = moment(updateDate);

    const daysDiff = today.diff(lastUpdate, 'days')

    if (daysDiff === 0) {
        return 'Updated today';
      } else if (daysDiff === 1) {
        return 'Updated yesterday';
      } else if (daysDiff <= 7) {
        return `Updated ${daysDiff} days ago`;
      } else if (daysDiff > 7 && daysDiff <= 14) {
        return 'Updated last week';
      } else {
        return `Updated on ${lastUpdate.format('MMMM D, YYYY')}`;
      }
}

export  function getLanguageColorClass(language){
    switch (language) {
        case 'Vue':
            return 'bg-success';
        case 'TypeScript':
            return 'bg-primary';
        case 'JavaScript':
            return 'bg-warning';
        case 'CSS':
            return 'bg-purple';
        case 'Jupyter Notebook ':
            return 'bg-orange';
        case 'Java':
            return 'bg-mustrad';
        case 'PHP':
            return 'bg-dark-purple'
        default : 
            return 'bg-danger'
    }
}

