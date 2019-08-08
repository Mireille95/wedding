function Wedding(firstName,lastName, phone,country, email,eventDetails,date,eventType, number,preferedVenues,price) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.country = country;
    this.email = email;
    this.eventDetails = eventDetails;
    
    this.date = date;
    this. eventType = eventType;
    this. number = number;
    this. preferedVenues = preferedVenues;
    this.price = price;
   
  }
  Wedding.prototype.fullBook = function() {
    return (
      this.firstName +
      " " +
      this.lastName +
      " " +
      this.phone +
      " " +
      this.country +
      " " +
      this.email +
      " " +
      this.eventDetails +
      " " + 
      this.date +
      " " + 
      this.eventType +
      " " + 
      this.number +
      " " + 
      this.preferedVenues +
      " " + 
      this.price
    );
  };
  $(document).ready(function() {
    $("#btn").click(function() {
       $("form#form").submit(function(event) {
           event.preventDefault();
  
      var fName = $("input#firstName").val();
      var lName = $("input#lastName").val();
      var phon = $("input#phone").val();
      var countr = $("input#country").val();
      var emai = $("input#email").val();
      var dFlex = $("input#flexible").val();
      var dat = $("input#date").val();
      var typ = $("select#type").val();
      var numbers = $("input#number").val();
      var preff = $("select#preffered").val();
     
      
    //   $("ul#we").append("<li><span class='contact'>" + newBook.fullBook() + "</span></li>");

