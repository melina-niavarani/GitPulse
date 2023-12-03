import { useEffect, useState } from "react";

import { requestApi } from "../../../api/requestApi";


function ActivitySidbar() {
    
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        setError(false);

        requestApi()
            .then((data) => {
                console.log(data)
            })
            .catch((e) => {
                setError(true)
                console.log({ e })
                
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div className="col-8 mt-5">
            <div className="d-flex justify-content-between">
                <span>Popular repositories</span>
                <a className="text-primary text-decoration-none" href="#">customiz your pins</a>
            </div>
            <div className="row mt-3">
                <div className="col-sm-6 my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-primary">repo name</h5>
                                <a href="#" className="btn btn-outline-secondary btn-sm rounded-pill px-2">Public</a>
                            </div>
                            <p className="card-text">discription</p>
                            <div className="d-flex gap-5 align-items-center">
                                <div>
                                    <span></span>
                                    <span>vue</span>
                                </div>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitySidbar