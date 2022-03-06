//accepts the roster from index.js, loops through and generates html page with divs for each role in the array
const teamGen = (roster) => {
    console.log(roster);

    const html = [];

    const managerGen = manager => {
        console.log(manager);
        let managerDiv =`
        <div class = "col-md-3 card">
            <h2>${manager.name} (Manager)</h2>
            <p>Employee Id: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.office}</p>
        </div>`;
        html.push(managerDiv)
    }


    const engineerGen = engineer => {
        console.log(engineer);
        let engineerDiv =`
        <div class = "col-md-3 card">
            <h2>${engineer.name} (Engineer)</h2>
            <p>Employee Id: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>`;    
        html.push(engineerDiv)
    }

    const internGen = intern => {
        console.log(intern);
        let internDiv =`
        <div class = "col-md-3 card">
            <h2>${intern.name}  (Intern)</h2>
            <p>Employee Id: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>`;   
        html.push(internDiv)
    }

    for (let i = 0; i < roster.length; i++){
        if (roster[i].getRole() === "Manager"){
            managerGen(roster[i]);
        }
        if (roster[i].getRole() === "Engineer"){
            engineerGen(roster[i]);
        }
        if (roster[i].getRole() === "Intern"){
            internGen(roster[i]);
        }
    }
    return html.join('');
}

module.exports = roster => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <div class = "container">
        <div class = "row">
            ${teamGen(roster)}
        </div>
    </div>
</body>
</html>
    `;
}