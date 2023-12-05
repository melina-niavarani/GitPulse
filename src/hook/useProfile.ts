import { useEffect, useState } from "react";
import { requestUserData, UserInfo } from "../api/requestApi";

function ProfileSidbar() {
    const [user, setUser] = useState<UserInfo | null >({
        name: "",
        email: "",
        blog: "",
        login:  "",
        avatar_url: "" ,
        following: 0,
        followers: 0,
    });
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        setError(false);
        requestUserData()
            .then((data) => {
                setUser(data)
            })
            .catch((e) => {
                setError(true)
                console.log({ e })
                
            })
            .finally(() => {
                setLoading(false)
            })

    }, []);
}