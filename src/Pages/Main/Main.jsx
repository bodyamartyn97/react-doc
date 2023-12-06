import Articles from '../../components/Articles';
import data from '../../data/data.json'
import './Main.css'

function Main() {

    return (
        <div className='Main'>
            <Articles data={data} />
        </div>
    )
}

export default Main;