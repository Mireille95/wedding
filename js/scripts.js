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
  