import salesByWeek from './data.js'

const salesReportContainer = document.getElementById("salesReport__container")
salesReportContainer.innerHTML = "<h1>Weekly Sales Report</h1><hr>"

const agentReportFactory = (sale) => {
    const agent = sale.sales_agent;
    const vehicle = sale.vehicle;
    let vehicleHtml = ""
    for (const entry of Object.entries(vehicle)) {
        vehicleHtml += `<br>${entry[0]}: ${entry[1]}`
    }

    return `
    <article>
        <h1>${agent.first_name} ${agent.last_name}</h1>
        <p>${vehicleHtml}</p>
        <p><strong>Profit: $${sale.gross_profit}</strong></p>
        <hr>
    </article>
    `
}

for (const sale of Object.values(salesByWeek)) {
    salesReportContainer.innerHTML += agentReportFactory(sale);
}

/*
[ ] Your first task is to use object methods 
to match the value of all properties of the sales_agent object 
in each sale against the input from Randall. 

[x] Put an input field in your DOM, 
[x] attach a keypress event listener to it, 
[x] and search when Randall presses enter. 
*/

const searchInput = document.querySelector("#searchInput")
console.log(searchInput)
searchInput.addEventListener('keypress', event => {
    if (event.charCode === 13) {
        const searchTerm = event.target.value
        const agentSales = salesByWeek.filter(sale => {
            let filter = false
            let agent = sale.sales_agent;
            for (const prop of Object.values(agent)) {
                if (prop.includes(searchTerm)) {
                    console.log(prop, "contains", searchTerm)
                    filter = true
                }
            }
            return filter
        })
        salesReportContainer.innerHTML = "<h1>Search Results</h1><hr>"
        agentSales.forEach(sale => {
            salesReportContainer.innerHTML += agentReportFactory(sale);
        })
    }
});