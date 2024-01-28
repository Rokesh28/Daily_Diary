
import './Home.css'
import Days from '../../components/days/Days';
import { useFetch } from '../../hooks/useFetch';

export default function Home() {

    const {data : days,error,isPending} = useFetch("https://jsonplaceholder.typicode.com/posts")

    

    return (
      <div className="container">
        {
            days && days.map((day) =>{
                return <Days day ={day} key = {day.id}/>
            })
        }
        {
            error && <p>{error}</p>
        }
        {isPending && <h3>     Loading.....     </h3>}
      </div>
    );
}
