const apiUrl = "https://api.rootnet.in/covid19-in/stats/latest";

async function covidDashboard() {
    
  const response = await fetch(apiUrl);
  const data = await response.json();

  const statesData = data.data.regional;
  const tableBody = document.querySelector("#covidTable tbody");
  
  tableBody.innerHTML = "";

  statesData.forEach((state, index) => {
    
    const totalCases = state.confirmedCasesIndian + state.confirmedCasesForeign;
   
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${state.loc}</td>
        <td>${state.confirmedCasesIndian}</td>
        <td>${state.confirmedCasesForeign}</td>
        <td>${state.discharged}</td>
        <td>${state.deaths}</td>
        <td>${totalCases}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

covidDashboard();
