

let projectsUrl = 'http://127.0.0.1:8000/api/projects/'

let getProjects = () => {
    fetch(projectsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buildProjects(data)
    })
}

let buildProjects = (projects) => {
    let projectsWrapper = document.getElementById('projects-wrapper')

    for (let i = 0; projects.length > i; i++){
        let project = projects[i]

        let projectCard = `
            <div class="project--card">
                <img src="http://127.0.0.1:8000${project.featured_image}" />
                <div>
                    <div class="card--header">
                        <h3>${project.title}</h3>
                    </div>
                    <p>${project.description.substring(0,150)}</p>
                
                </div>
                
                
                <p></p>
            </div><hr>
        `
        projectsWrapper.innerHTML += projectCard
    }

    addVoteEnvents()
}

let addVoteEnvents = () => {
    let voteBtns = document.getElementsByClassName('vote--option')

    for (let  i = 0; voteBtns.length > i; i++){
        voteBtns[i].addEventListener('click', (e) => {
            let vote = e.target.dataset.vote
            let project = e.target.dataset.project

            fetch(`http://127.0.0.1:8000/api/projects/${project}/vote/`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'value': vote})
            })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data)
            })
        })
    }
}

getProjects();

