import salesByWeek from './data.js'

/*
[x] Display the first and last name of the sales agent.
[x] Display all keys and values for the car sold.
[x] Display the gross profit made on the sale.
*/
const agents = []

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

const carSaleFactory = (car) => {
    return `
    `
}

for (const sale of Object.values(salesByWeek)) {
    // console.log("sale =", sale)
    salesReportContainer.innerHTML += agentReportFactory(sale);
}
