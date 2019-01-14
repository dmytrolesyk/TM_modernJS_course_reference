//Listen for Submit

document.getElementById('loan-form').addEventListener('submit', function(e){
	e.preventDefault();
	//Hide results
	document.getElementById('results').style.display = 'none';
	//show loader
	document.getElementById('loading').style.display = 'block';

	setTimeout(calculateResults, 2000);
});

//Calculate Results Function 
function calculateResults() {

	//UI Variables

	const inputAmount = document.getElementById('amount');
	const inputInterest = document.getElementById('interest');
	const inputYears = document.getElementById('years');

	const monthlyPaymentDisplay = document.getElementById('monthly-payment');
	const totalPaymentDisplay = document.getElementById('total-payment');
	const totalInterestDisplay = document.getElementById('total-interest');

	const principal = parseFloat(inputAmount.value);
	const calculatedInterest = parseFloat(inputInterest.value) / 100 / 12;
	const calculatedPayments = parseFloat(inputYears.value) * 12;

	//Compute monthly payment

	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal*x*calculatedInterest)/(x-1);

	if(isFinite(monthly)) {
		monthlyPaymentDisplay.value = monthly.toFixed(2);
		totalPaymentDisplay.value = (monthly * calculatedPayments).toFixed(2);
		totalInterestDisplay.value = ((monthly * calculatedPayments) - principal).toFixed(2);

		//Show results
		document.getElementById('results').style.display = 'block';

		//Hide loader
		document.getElementById('loading').style.display = 'none';
	} else {
		//Hide results
		document.getElementById('results').style.display = 'none';

		//Hide loader
		document.getElementById('loading').style.display = 'none';
		showError('Please check your numbers');
	}
 
}

function showError(error) {
	const errorDiv = document.createElement('div');

	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	errorDiv.className = "alert alert-danger";
	errorDiv.appendChild(document.createTextNode(error));

	card.insertBefore(errorDiv, heading);

	//clear error after 3s
	setTimeout(clearError, 3000);
}

//clear error function

function clearError() {
	document.querySelector('.alert').remove();
}