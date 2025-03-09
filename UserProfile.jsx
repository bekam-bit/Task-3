import{useNavigate, useParams} from 'react-router-dom';

function UserProfile() {
    const{username}=useParams();
    const navigate=useNavigate();
    return(
        <div>
            <h1>Welcome,{username}</h1>
            <button onClick={() => navigate("/")}>Go Home</button>
        </div>
    )
}
export default UserProfile;