function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }


    return age;
}

function updateAge() {
    document.getElementById('age').innerHTML = "Shahriar Haque, " + getAge("2004-10-10");
}

function reformatDate(dateCreated) {
    return (new Date(dateCreated).toDateString());
  }

  updateAge();