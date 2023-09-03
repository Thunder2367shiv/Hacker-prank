function do_it() {

    let first = document.getElementById('mine');
    first.remove();
    let first1 = document.getElementById('container');
    first1.remove();
    document.body.style.backgroundColor = "black";
    let a = [
        "TARGET LOCKED ................................................",
        "INITIALISING hacking tools  ..................................",
        "Connect to SERVER 1 ..........................................",
        "Connection FAILED ............................................",
        "Connect to SERVER 2 ..........................................",
        "Connected SUCCESSFULLY .......................................",
        "Trying ALl Brute force MEthods ...............................",
        "100k passwords TRIED .........................................",
        "MATCH not found ..............................................",
        "300k passwords TRIED .........................................",
        "MATCH not found ..............................................",
        "500k passwords TRIED .........................................",
        "MATCH found ..................................................",
        "Accessing ACCOUNT.............................................",
        "HACK SUCCESSFULL .............................................",
        "ACCESS GRANTED ..............................................."];

    function value() {
        let name = prompt("Enter you name : ");
        
        let phone = prompt("Enter your number : ");
        
        let email = prompt("Enter your E-mail : ");
        
        let conf = confirm("Do you want to confirm or change it");
        if (!conf) {
            value();
        }
        use.innerHTML = use.innerHTML + "Name :" + name+"<br>";
        use.innerHTML = use.innerHTML + "phone number :" + phone+"<br>";
        use.innerHTML = use.innerHTML + "E-mail id :" + email+"<br>"+"<br>"+"<br>";
    }
    value();

    const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, seconds * 1000);
        })
    }
    const showHack = async (message, i) => {
        await sleep(i);
        console.log(message);
        use.innerHTML = use.innerHTML + message + "<br>";
    }
    (async () => {
        for (let i = 0; i < a.length; i++) {
            await showHack(a[i], i);
        }
    })()
}
