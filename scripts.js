//Getting Elements
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e){
    
    //UI
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const priciple = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute The Monthly Payments

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (priciple*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2); 
        totalInterest.value = ((monthly * calculatedPayments)-priciple).toFixed(2);
    } else{
        console.log('Error had occured! ');
    }


    e.preventDefault();
}