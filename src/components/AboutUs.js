import User from "./User";
import { useEffect, useState } from "react";

const AboutUs = () => {
    const [UserList, setUserList] = useState(null);
    const [Counts, setCounts] = useState({});

    useEffect(() => {
        fetchData();
    }, []); // Fetch data only when the component mounts

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3200/users");
            const data = await response.json();
            setUserList(data); // Ensure this sets an array or list
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleButtonClick = (userId) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [userId]: (prevCounts[userId] || 0) + 1,
        }));
    };

        return (
            <div className="aboutUs">
                <h1>Hello About Us</h1>
                {UserList?.users && 
                    Array.isArray(UserList.users) ? (
                        UserList.users.map(user => (
                            <User 
                                key={user.id} 
                                {...user} 
                                count={Counts[user.id] || 0} // Display specific count for each user
                                onButtonClick={() => handleButtonClick(user.id)}
                            />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div>
        );
    };

export default AboutUs;
