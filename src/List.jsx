
import batch from './Details.jsx';
import {trainer,branch} from './Details.jsx'

function List(){
    return(
        <>
        <h1>This is my List Component</h1>
        {batch}
        {trainer}
        {branch}
        
        <ul>
            <li>Tea</li>
            <li>Milk</li>
            <li>Juice</li>

        </ul>
        </>
    );
}

export default List;