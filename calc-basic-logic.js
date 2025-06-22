function input_stream(value){
    document.getElementById("equation").value += value;
    
}

function clear_input(){
    document.getElementById("equation").value = ""
}

function calculate(){
    const eq = document.getElementById("equation").value;
    try{
        let result = eval(eq);
        try{
        document.getElementById("equation").value = String(result);
        } catch {console.log("String did not worked as intended...")}
    } catch {console.log("'", eq, "' is invalid.")}
}
