function validateRegistration(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var pass = document.getElementById('password').value;
	const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const validPhone = /^[0-9\.\,\ \+\-]*$/;
	const validPhoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
	if(name=="")
	{
		alert('Enter a name!!');
	}
	else if(email=="")
	{
		alert('Enter an Email ID!!');
	}
	else if(!validEmail.test(String(email).toLowerCase()))
	{
		alert('Enter a valid Email ID!!');
	}
	else if(phone=="")
	{
		alert('Enter a Phone Number!!');
	}
	else if(phone.length!=10)
	{
		alert('Phone number should be 10 digits!!');
	}
	else if(!validPhone.test(phone))
	{
		alert('Phone Number should be Number!!');
	}
	else if(!validPhoneFormat.test(phone))
	{
		alert('Invalid Phone Number Format!!');
	}
		
}