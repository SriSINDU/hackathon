		var contactsobj={
			"contacts":[]
		}
		var storecontacts=JSON.stringify(contactsobj);
		localStorage.setItem("contactslist",storecontacts);


		function display(){

			var list=localStorage.getItem("contactslist");
			var contactsobj=JSON.parse(list);
			//console.log(objcontact);
			var s="",itr;
			s=s+"<tr><td>Name</td><td>Email</td><td>Phone</td><td>Location</td><td></td><td></td></tr>";
			for (itr in contactsobj.contacts){
				if(contactsobj.contacts[itr].NAME !=undefined || contactsobj.contacts[itr].EMAIL!= undefined || contactsobj.contacts[itr].PHONE!=undefined || contactsobj.contacts[itr].LOC != undefined)
				{
					s=s+"<tr><td>"+contactsobj.contacts[itr].NAME+"</td><td>"+contactsobj.contacts[itr].EMAIL+"</td><td>"+contactsobj.contacts[itr].PHONE+"</td><td>"+contactsobj.contacts[itr].LOC+"</td><td><input type='submit' value='update' onclick=' return updateContact("+itr+")' ></td><td><input type='submit' value='delete' onclick='return deleteContact("+itr+")'></td></tr>";
				}
			}
		
			document.getElementById("display").innerHTML =s;		
		}

		function checkFeilds(){
			  
			  if(!checkName()){
			  	//console.log("empty");
			  	return false;
			  }

			  if(!checkEmail()){
			  	return false;
			  }
			  
			  if(!checkPhone()){
				return false;
			  }	

			  if(!checkLoc()){
			  	return false;
			  }

			var Name=document.getElementById("name").value;
			var Email=document.getElementById("email").value;
			var Phone=document.getElementById("phone").value;
			var Loc=document.getElementById("loc").value;

			var list=localStorage.getItem("contactslist");
			var contactsobj=JSON.parse(list);
			var len=contactsobj.contacts.length;

			contactsobj.contacts[len]={};
			contactsobj.contacts[len].NAME=Name;
			contactsobj.contacts[len].EMAIL=Email;
			contactsobj.contacts[len].PHONE=Phone;
			contactsobj.contacts[len].LOC=Loc;

			var storecontact=JSON.stringify(contactsobj);
			localStorage.setItem("contactslist",storecontact);
			console.log(storecontact);

			document.getElementById("name").value="";
			document.getElementById("email").value="";
			document.getElementById("phone").value="";
			document.getElementById("loc").value="";

			display();
			suggestcontacts();
			return false;
		}


		function updateContact(id){
			
			document.getElementById("displayhead").innerHTML="Update the Contact";
			document.getElementById("disbutton").value="Update";
			var list=localStorage.getItem("contactslist");
			var contactsobj=JSON.parse(list);
			
			document.getElementById("name").value=contactsobj.contacts[id].NAME;
			document.getElementById("email").value=contactsobj.contacts[id].EMAIL;
			document.getElementById("phone").value=contactsobj.contacts[id].PHONE;
			document.getElementById("loc").value=contactsobj.contacts[id].LOC;
			delete contactsobj.contacts[id].NAME;
			delete contactsobj.contacts[id].EMAIL;
			delete contactsobj.contacts[id].PHONE;
			delete contactsobj.contacts[id].LOC;

			var storecontact=JSON.stringify(contactsobj);
			localStorage.setItem("contactslist",storecontact);
			
			display();
			suggestcontacts();
			return false;

		}

		
		function deleteContact(id){
			

			var list=localStorage.getItem("contactslist");
			var contactsobj=JSON.parse(list);			
			
			delete contactsobj.contacts[id].NAME;
			delete contactsobj.contacts[id].EMAIL;
			delete contactsobj.contacts[id].PHONE;
			delete contactsobj.contacts[id].LOC;

			var storecontact=JSON.stringify(contactsobj);
			localStorage.setItem("contactslist",storecontact);
			display();
			suggestcontacts();
			return false;
		}

		function suggestcontacts(){
			
			var searchName=document.getElementById("suggestbox").value;

			var list=localStorage.getItem("contactslist");
			var contactsobj=JSON.parse(list);	

			var i,suggestname="";
			suggestname+="<ul style='list-style-type:none'>";
			for (i in contactsobj.contacts){
				if(contactsobj.contacts[i].NAME != undefined){
					var orgname=contactsobj.contacts[i].NAME;
					var num=orgname.search(searchName);
					if(num != -1){
						suggestname+="<li>"+contactsobj.contacts[i].NAME+"&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='update' onclick='updateContact("+i+")'> </li><br>";
					}
					
				}
			}

			suggestname+="</ul>";

			document.getElementById("displaysuggestions").innerHTML=suggestname;
		}
		function checkName(){
			var Name=document.getElementById("name").value;
			if(Name ===""){
				document.getElementById("sname").innerHTML="please enter the Name ";
				return false;
			}
			else{
				return true;
			}
		}

		function checkname(){
			 document.getElementById("sname").innerHTML="";
		}

		function checkEmail(){
			var Email=document.getElementById("email").value;
			if(Email ==""){
				document.getElementById("semail").innerHTML="please enter a email";
				return false;
			}
			else if( !(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(Email))){
				document.getElementById("semail").innerHTML="please enter a valid email";
				return false;
				
			}
			else{
				return true;
			}
		}

		function checkemail(){
			document.getElementById("semail").innerHTML="";
		}

		function checkPhone(){
			var Phone=document.getElementById("phone").value;
			if(Phone ===""){
				document.getElementById("sphone").innerHTML="please enter  Phone Number.";
				return false;
				
			}
			else if( ! (Phone.match(/^\d{10}$/))){
				document.getElementById("sphone").innerHTML="enter only digits(10) for phone";	
				return false;			
			}
			else{
				return true;
			}

		}
		function checkphone(){
			document.getElementById("sphone").innerHTML="";
		}
		function checkLoc(){
			var Loc=document.getElementById("loc").value;
			if(Loc ==""){
					document.getElementById("sloc").innerHTML="please enter the location.";
					return false;
			}else{
				return true;
			}

		}
		function checkloc(){
			document.getElementById("sloc").innerHTML="";
		}

		function gotoContact(event){
			var keyval= event.keyCode;
			if(keyval === 13){
				
				var list=localStorage.getItem("contactslist");
				var contactsobj=JSON.parse(list);
				var i,pos;
				for(i in contactsobj.contacts){
					if(contactsobj.contacts[i].NAME != undefined){
						pos=i;
						break;
					}
				}
				var len=contactsobj.contacts.length;
				for (i in contactsobj.contacts){
					if(contactsobj.contacts[i].NAME == undefined){
						len--;
					}
				}
				if(len>0)
				{
					updateContact(i);
				}
			}
		}