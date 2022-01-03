import {checkForURL} from "./urlChecker";

const handleSubmit  = async (event) => {
    event.preventDefault()

    let formText = document.getElementById('url').value

    if (checkForURL(formText)) {
        const headersRequest = {
            method: 'POST',
            credentials: 'same-origin',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:formText})
        };

        const res = await fetch("http://localhost:8081/api", headersRequest)
        const response = await res.json()
            .then(res => {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
                document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            })
            .catch(error => console.log(error))
    }
}

export { handleSubmit }