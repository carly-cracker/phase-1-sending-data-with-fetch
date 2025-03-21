// Add your code here
/*let name = "Steve"
      let email = "steve@steve.com"

const submitData = (name,email) =>{
    const configObj = {
    method : "POST",
    headers:{
        'Content-Type' : "application/json",
        'Accept' : "application/json",
    },
    body : JSON.stringify({name, email})
    }

  return fetch ('http://localhost:3000/users', configObj)
.then((response)=> {
    if (!response.ok) {
        throw new Error(`Unauthorized Access`); 
    }
    return response.json()})
.then(data=>{
    console.log(data);
    const newId = document.createElement("p")
    newId.innerText = `${data.id}`
    document.body.appendChild(newId);
})
.catch(error =>{
    const alert = document.createElement("p")
    alert.innerText = "Unauthorized Access"
    console.log(error)
    document.body.appendChild(alert)
})
}*/
const submitData = (name, email) => {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name, email }),
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(response =>  response.json())
        .then(data => {
            console.log("Response Data:", data);

            const newId = document.createElement("p");
            newId.textContent = data.id;
            document.body.appendChild(newId);
        })
        .catch(error => {
            console.error("Fetch Error:", error);

            const errorElement = document.createElement("p");
            errorElement.textContent = error.message;
            document.body.appendChild(errorElement);
        });
};
