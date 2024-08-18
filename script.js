const loanForm = document.querySelector('#loan-form');
loanForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    const totalPayment = (monthly * calculatedPayments).toFixed(2);

    document.getElementById("monthlyPayment").innerHTML =  monthlyPayment+"₹";

    document.getElementById("totalInterest").innerHTML = "% " + totalInterest;

    document.getElementById("totalPayment").innerHTML =  totalPayment +"₹";
})