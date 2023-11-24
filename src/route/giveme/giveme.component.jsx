import db from "../../utilize/firebase/firebase.utilize";
import GiveMeBoard from "../../components/GiveMeBoard/GiveMeBoard.component";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";





const GiveMe = ()=>{
    const [docData,setDocDATA] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "messages"));
            const chartData = querySnapshot.docs.map(doc => doc.data());
            setDocDATA(chartData);
              return ()=>{}
        }
        fetchData();
    }
        ,[])

    return (<div>
        {docData.map((element, index)=> {
            console.log(element)
            return <GiveMeBoard key={index} 
            name={element.name}
            email={element.email}
            message={element.message}
            phone={element.phone}
            />})}

    </div>);


}
export default GiveMe;