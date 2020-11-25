

const validation = (props)=>{
    let msg = 'Text too short';
    if(props.length >=5){
        msg="Text long Enough";
    }
    return (
        <p> {msg} </p>
    );
}

export default validation;