export default function search_user(url, success, error) {

    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.onload = () => {

        if (request.status === 200) {

            const data = JSON.parse(request.responseText);
            success(data);
        } else {
            const msgError = JSON.parse(request.responseText);
            const status = request.status;
            error( {msgError, status} );

        }
    }

    request.send();
}