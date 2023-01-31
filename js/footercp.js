function updateCopyright() {
    var curDate = new Date();

    document.getElementById('footerCP').innerHTML = "&copy; " + curDate.getFullYear() + " Xenon Colt";
  }

  function reformatDate(dateCreated) {
    return (new Date(dateCreated).toDateString());
  }
  updateCopyright();