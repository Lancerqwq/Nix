const disableKey = () => {
    document.addEventListener('keydown', (e) => {
        if(e.keyCode == 123){
            e.preventDefault()
        }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
            e.preventDefault()
        }else if((e.shiftKey) && (e.keyCode == 121)){
            e.preventDefault()
        }else if((e.ctrlKey) && (e.keyCode == 85)){
            e.preventDefault()
        }
    });
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    })
}
export default disableKey;