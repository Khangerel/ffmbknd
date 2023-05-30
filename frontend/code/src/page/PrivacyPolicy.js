import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { API } from "../api/axios";

export default function PrivacyPolicy() {
    const [main_data, setMainData] = useState({});
    const getData = ()=>{
        API.get(`privacy_policy/?lang_id=${localStorage.getItem('lang_id')}`, {}).then((response)=>{
            if (response.status === 200){
                if(response.data.length > 0){
                    setMainData(response.data[0]);
                }
            }
        });
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <Container className="mt-5 mb-5">
            <div dangerouslySetInnerHTML={{__html : main_data.body}}></div>
        </Container>
    )
}