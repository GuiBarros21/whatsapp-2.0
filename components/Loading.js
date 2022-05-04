import {Circle} from "better-react-spinkit";
function loading()
{
return (
    <center style={{display: 'grid',placeItems: 'center', height:'100vh'}}>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt=""
            style={{marginBottom:10}}
            height={200} />
        </div>
        <Circle color="#3CBC28" size={60} />
    </center>
)
}

export default loading;
    
