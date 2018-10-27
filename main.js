
const loadNewApi = () => {
    return new Promise((resolve, reject) => {
        $.ajax('https://data.nashville.gov/resource/h6nm-32hj.json')
        .done((data) => {
            resolve(data)
            // $('#shitGoesHere').html(data.event)
        }).fail(error => {
            reject(error);
        })
    })
}
loadNewApi();

const initalizeNewApi = () => {
    loadNewApi().then((data) => {
        loadTheApi(data);
        console.log(data);
    })
}
initalizeNewApi();

const loadTheApi = (eventsStuffs) => {
    let domString = '';
    eventsStuffs.forEach((eventStuff) => {
        domString += `<div>
        <h3>${eventStuff.event}</h3>
        <p>${eventStuff.event_type}</p>
        <p>${eventStuff.location}</p>
        </div>`
    })
    $('#shitGoesHere').html(domString);
}