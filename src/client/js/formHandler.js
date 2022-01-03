import {checkForURL} from "./urlChecker";

const handleSubmit  = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if (checkForURL(formText)) {
        const headersRequest = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formText})
        };

        const res = await fetch("http://localhost:8081/api", headersRequest)
            .then(async response => (await response.json()))
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