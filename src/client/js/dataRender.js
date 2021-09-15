//Rendering data from fetching data on meaningCloud
const model = document.getElementById('model');
const score_tag = document.getElementById('score_tag');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');

const dataRender = (response) => {
    model.innerHTML = `Model: ${response.model}`;
    score_tag.innerHTML = `Score-Tag: ${response.score_tag}`;
    confidence.innerHTML = `Confidence: ${response.confidence}`;
    irony.innerHTML = `Irony: ${response.irony}%`;
};

export { dataRender }