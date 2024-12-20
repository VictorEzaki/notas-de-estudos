import './styles/index.css'
import dayjs from 'dayjs'

const hello = () => {
    alert(`It Works! Data de hoje: ${dayjs().format('DD/MM/YYYY')}`)
}

hello()