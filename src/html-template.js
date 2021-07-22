const generateManagerCards = dataArray => {
    let templateData = ""
    let managers = dataArray.filter(data => data.constructor.name === "Manager");
    managers.forEach(manager => {
        templateData += `
        <div class="card m-4" style="width: 20rem; height: 20rem;">
            <div class="bg-primary h-25">
                <h5 class="card-title text-light pt-2 pl-3">${manager.name}</h5>     
                <h6 class="card-subtitle mb-2 pl-3 text-light">Manager</h6>
            </div>
            <div class="bg-dark  h-100">
                <div class="bg-white ml-3 mr-3 mt-5">
                    <p class="mb-1 pl-2 py-1">ID: ${manager.id}</p>
                </div>
                <div class="bg-white mt-0 ml-3 mr-3 ">
                    <p class="mb-1 pl-2 py-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                </div>
                <div class="bg-white ml-3 mr-3 ">
                    <p class="mb-1 pl-2 py-1">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>        
        `
    })
    return templateData;
}

const generateEngineerCards = dataArray => {
    let templateData = ""
    let engineers = dataArray.filter(data => data.constructor.name === "Engineer");
    engineers.forEach(engineer => {
        templateData += `
        <div class="card m-4" style="width: 20rem; height: 20rem;">
            <div class="bg-primary h-25">
                <h5 class="card-title text-light pt-2 pl-3">${engineer.name}</h5>     
                <h6 class="card-subtitle mb-2 pl-3 text-light">Engineer</h6>
            </div>
            <div class="bg-dark  h-100">
                <div class="bg-white ml-3 mr-3 mt-5">
                    <p class="mb-1 pl-2 py-1">ID: ${engineer.id}</p>
                </div>
                <div class="bg-white mt-0 ml-3 mr-3 ">
                    <p class="mb-1 pl-2 py-1">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                </div>
                <div class="bg-white ml-3 mr-3 ">
                    <p class="mb-1 pl-2 py-1">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>        
        `
    })
    return templateData;
}

const generateInternCards = dataArray => {
    let templateData = ""
    let interns = dataArray.filter(data => data.constructor.name === "Intern");
    interns.forEach(intern => {
        templateData += `
        <div class="card m-4" style="width: 20rem; height: 20rem;">
            <div class="bg-primary h-25">
                <h5 class="card-title text-light pt-2 pl-3">${intern.name}</h5>     
                <h6 class="card-subtitle mb-2 pl-3 text-light">Intern</h6>
            </div>
            <div class="bg-dark  h-100">
                <div class="bg-white ml-3 mr-3 mt-5">
                    <p class="mb-1 pl-2 py-1">ID: ${intern.id}</p>
                </div>
                <div class="bg-white mt-0 ml-3 mr-3 ">
                    <p class="mb-1 pl-2 py-1">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                </div>
                <div class="bg-white ml-3 mr-3 ">
                    <p class="mb-1 pl-2 py-1">School: ${intern.school}</p>
                </div>
            </div>
        </div>        
        `
    })
    return templateData;
}

//  const testdata = [
//     Manager {
//       name: '1',
//       id: '2',
//       email: '3@gmail.com',
//       officeNumber: '1'
//     },
//     Intern { name: '1', id: '2', email: '3@gmail.com', school: '2' },
//     Engineer { name: '1', id: '2', email: '3@gmail.co', github: '44' }
//   ]

module.exports = data => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Team Profile</title>
    </head>
    <body>
    <header class="bg-danger p-3 mb-5">
        <h1 class="text-light text-center">My Team</h1>
    </header>
    <main class="d-flex flex-wrap justify-content-center">
    ${generateManagerCards(data)}
    ${generateEngineerCards(data)}
    ${generateInternCards(data)}
    </main>
    </body>
</html>
`
}