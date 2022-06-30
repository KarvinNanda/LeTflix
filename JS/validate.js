function validasi(){
	var email = document.forms["inForm"]["email"].value;
	var pass = document.forms["inForm"]["pass"].value;
	var gender = document.forms["inForm"]["gender"].value;
	var agree = document.forms["inForm"]["agreement"].value;

	var error=[];

	
	MailV(email,error);
	PassV(pass,error);
	GenderV(gender,error);
	AgreeV(agree,error);

	if(error.length===0){
		alert("Thank you for your information");
	}
	else{
		alert(error.join('\n'));
	}
	
}

function MailV(email,error){
	if(email===''){
		
		error.push("Email must be filled");
	}

	else if(email.startsWith('.') || email.startsWith('@')){
		
		error.push("Email cannot start with . or @");
	}

	else if(!email.endsWith('@letflix.com')){
		
		error.push("Email must be end with letflix.com");
	}
	
		
	
}

function PassV(pass,error){
	if(pass===''){
		
		error.push("Password must be filled");
	}

	else if(pass.length < 5){
		
		error.push("Password minimum length 5");
	}
	
		
	
}

function GenderV(gender,error){
	if(gender===''){
		
		error.push("Gender must be filled");
	}
	else if(gender!=('Male') && gender!=('Female')){
		
		error.push("Gender must between Male or Female (case sensitive)");
	}
	
		
	
}

function AgreeV(agree,error){
	if(!agreement.checked){
		
		error.push("you must agree");
	}
	
		
	
}