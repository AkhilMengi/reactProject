
const User = ({name,email,count,onButtonClick,id})=>{


    
    return (
        <div className="user-card">
            <h1>{name}</h1>
            <h2>{email}</h2>
            <p>{count}</p>
            <p>{id}</p>
            <button onClick={() => onButtonClick(name)}>Click Me</button>
        </div>
    )
}

export default User;