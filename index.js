function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };


    const serviceID="service_1xi09wd";
    const templateID="template_9hms089";

    emailjs.send(serviceID,templateID,params)
    .then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");
    }
    )
    .catch((err)=>console.log(err));
}
