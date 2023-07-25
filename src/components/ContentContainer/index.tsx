import TopNavigation from "../TopNavigation"
import { BsPlusCircleFill } from 'react-icons/bs';

const ContentContainer = () =>{
    return (
        <div className='content-container'>
            <TopNavigation />
            <div className='content-list'>
                {postsGpt.map((item)=> <Post name={item.name} timestamp={item.timestamp} text={item.text} img={item.img} /> )}
            </div>
            <BottomBar />
        </div>
    )
}

interface PostType{
    name : string;
    timestamp : string;
    text : string;
    img? : string
}

const Post = ({name, timestamp, text,img} : PostType) =>{
    return (
        <div className="post">
            <Avatar img={img} name={name.split("")[0]} />
            <div className="post-content">
                <div className="post-owner">
                    <span className="owner-name">{name}</span>
                    <small className="timestamp">{timestamp}</small>
                </div>
                <div className="post-text">{text}</div>
            </div>
        </div>
    )
}

interface ProfileType {
    img? : string;
    name : string;
}

const Avatar = ({img,name}:ProfileType) => (
    <div className="avatar-wrapper">
        <div className="avatar-circle">
            {img ? 
            <img className="profile-image" src={"/public/assets/pictures/"+img}/> : 
            <h1 className="profile-text">{name}</h1>
            }
        </div>
    </div>
)

const BottomBar = () => {
    return (
        <div className="bottom-bar">
            <BsPlusCircleFill size='22' className="text-green-400 dark:text-primary mx-2 shadow-lg" />
            <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
        </div>
    )
}

const postsGpt:PostType[] = [
    { "name":"Leon", "timestamp":"5 days ago", "text" : "Hey everyone. How's everyone doing?", "img":"Leon.jpg"},
    { "name":"Ada", "timestamp":"5 days ago", "text" : "Hi Leon, all good here.", "img":"Ada.png"},
    { "name":"Jill", "timestamp":"5 days ago", "text" : "Just got out of a tricky situation.", "img":"Jill.jpg"},
    { "name":"Chris", "timestamp":"5 days ago", "text" : "Jill, you're always in some kind of trouble."},
    { "name":"Albert", "timestamp":"4 days ago", "text" : "Hello everyone, hope we're staying out of trouble."},
    { "name":"Rebecca", "timestamp":"4 days ago", "text" : "Hi Albert, doing our best."},
    { "name":"Claire", "timestamp":"3 days ago", "text" : "Just came across some unusual activity here.", "img":"Claire.png"},
    { "name":"Leon", "timestamp":"3 days ago", "text" : "Claire, need any help?", "img":"Leon.jpg"},
    { "name":"Albert", "timestamp":"3 days ago", "text" : "Claire, report the activity to HQ."},
    { "name":"Ada", "timestamp":"3 days ago", "text" : "Leon, always ready to jump in. Be careful.", "img":"Ada.png"},
    { "name":"Jill", "timestamp":"2 days ago", "text" : "Chris, got a lead on that case?", "img":"Jill.jpg"},
    { "name":"Chris", "timestamp":"2 days ago", "text" : "Working on it, Jill. Will update soon."},
    { "name":"Rebecca", "timestamp":"22 hours ago", "text" : "Has anyone heard from Claire?"},
    { "name":"Leon", "timestamp":"20 hours ago", "text" : "I'll reach out to Claire.", "img":"Leon.jpg"},
    { "name":"Claire", "timestamp":"3 hours ago", "text" : "Sorry, was out of range. I'm safe.", "img":"Claire.png"},
    { "name":"Ada", "timestamp":"2 hours ago", "text" : "Good to know, Claire. Stay safe.", "img":"Ada.png"},
    { "name":"Albert", "timestamp":"2 hours ago", "text" : "Remember, stay vigilant everyone."},
    { "name":"Chris", "timestamp":"1 hour ago", "text" : "Understood, Albert. Will do."},
    { "name":"Jill", "timestamp":"20 minutes ago", "text" : "Stay safe everyone.", "img":"Jill.jpg"},
    { "name":"Leon", "timestamp":"Just now", "text" : "Let's catch up again tomorrow.", "img":"Leon.jpg"}
]


export default ContentContainer