'use strict';


$(document).ready(onInit);



function onInit() {
    renderSkilles();
}


function renderSkilles() {
    var skilles = getSkilles();
    var strSkilles = skilles.map(skill => {
        return `<p class="skilltitle">${skill.name}
            <div class="progress">
            <div class="progress-bar ${skill.color}" role="progressbar" style="width: ${skill.pracent};" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${skill.pracent}</div>
            </div>
        </p>
        `
    }).join('');
    $('.skill').html(strSkilles);

}
