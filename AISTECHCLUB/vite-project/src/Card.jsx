import profilepic from './assets/prof.jpg'

function Card(){
    return(
        
        <div className="card">
            <img className='CardImage' alt="profile picture" src={profilepic}></img>
            <h2 className='card-Title'>Nathan</h2>
            <p className = "card-Text">I am a student,i like web dev</p>


        </div>
    );

}

export default Card;