import { ContentCutSharp, ContentPasteGoSharp } from "@mui/icons-material";
import {YellowArrow, ArrowTitle, ArrowContent, ArrowLi, ArrowUl, ArrowDiv} from "./ArrowMessage.style";


type ArrowMessageType = {
    title:string,
    content:string
}[][]

const ArrowMesssges:ArrowMessageType =[
    [
        {title: "Name:", content:"Tongci Zhang"},
        {title: "Website:", content:"ztongci.netlify.app"},
        {title: "Phone:", content:"+81 070-9209-3452"},
        {title: "City:", content:"Tokyo, JAPAN"},
    ],
    [
        {title: "Age:", content:"26"},
        {title: "Degree:", content:"MBA"},
        {title: "PhEmailone:", content:"ztongci@gmail.com"},
        {title: "Freelance:", content:"Available"},
    ],
];


const ArrowMessage = ()=>{
    return(<div className="row">{ArrowMesssges.map((ContentData,id)=>
    
    <ArrowDiv className="col-lg-6" key={`ArrowDiv ${id}`}>
    <ArrowUl>
        {ContentData.map((contents, contentIndex)=>
        
           <ArrowLi key={contentIndex}>
            <YellowArrow className="fa-solid fa-chevron-right" key={`Icon ${contentIndex}`}/> 
            <ArrowTitle key={`Title ${contentIndex}`}>{contents.title}</ArrowTitle> 
            <ArrowContent key={`Content ${contentIndex}`}>{contents.content}</ArrowContent>
            </ArrowLi>
            )}     
    </ArrowUl>
    </ArrowDiv>)}</div>);
}

export default ArrowMessage;