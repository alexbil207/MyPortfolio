'use strict';


$(document).ready(onInit);



function onInit() {
  renderSkilles();
  renderProjects();
  renderProjectsModal();
  $('.email-btn').click(sendMail);
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


function renderProjects() {
  var count = 0;
  var projects = getProjects();
  var minProjStr = projects.map(project => {
    count++;
    return `<div class="col-md-3 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${count}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="${project.minImage}" alt="">
                    </a>
                     <div class="portfolio-caption">
                        <h4>${project.name}</h4>
                        <p class="text-muted">${project.category}</p>
                    </div>
                </div>`
  }).join('');
  $('.container .projects').html(minProjStr);
}

function renderProjectsModal() {
  var count = 0;
  var projects = getProjects();
  var maxProjStr = projects.map(project => {
    count++;
    return `
          <div class="portfolio-modal modal fade" id="portfolioModal${count}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${project.name}</h2>
                <img class="img-fluid d-block mx-auto" src="${project.maxImage}" alt="">
                <p>${project.description}</p>
                <ul class="list-inline">
                  <a href="${project.link}">Open Here!</a>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        `
  }).join('');
  $('.modals').html(maxProjStr);
}

function sendMail() {
  var subject = $('input[name="subject"]').val();
  var mail = $('input[name="email"]').val();
  var message = $('textarea').val();
  if (!subject || !mail || !message) return
  window.open(`mailto:${mail}?subject=${subject}&body=${message}`);
  $('textarea"]').val('');
  $('input[name="email"]').val('');
  $('input[name="subject"]').val('');

}
