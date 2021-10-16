import {format} from 'date-fns'

const formatDate = (date) => format(new Date (date), 'H:mm')


const tools ={
    formatDate: formatDate
}

export default tools