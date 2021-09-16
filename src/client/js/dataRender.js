//Rendering data from fetching data on meaningCloud
const model = document.getElementById('model');
const score_tag = document.getElementById('score_tag');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');

const dataRender = (response) => {
    model.innerHTML = response.model
    score_tag.innerHTML = response.score_tag
    confidence.innerHTML = response.confidence
    irony.innerHTML = response.irony
};

export { dataRender }