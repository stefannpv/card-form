// CHANGING CARD CONTENT

function changeNumber(newtext) {
    document.getElementById("cardNumber").textContent=newtext;
 }


function changeName(newtext) {
  document.getElementById("userName").textContent=newtext;
}

function changeMonth(newtext) {
  document.getElementById("Cmonth").textContent=newtext;
}

function changeYear(newtext) {
  document.getElementById("Cyear").textContent=newtext;
}

function changeCvc(newtext) {
  document.getElementById("cvc").textContent=newtext;
}


//ADD AND REMOVE CLASSES TO SHOW ERRORS


const numberErr = document.getElementById("numberError")

function outlineNumber() {
  document.getElementById("card-number").classList.add("error");
  numberErr.classList.remove("hidden");
}


const monthErr = document.getElementById("monthError")

function outlineMonth() {
  document.getElementById("month").classList.add("error");
  monthErr.classList.remove("hidden");
  }

function outlineYear() {
  document.getElementById("year").classList.add("error")
}


const cvcErr = document.getElementById("cvcError")

function outlineCvc() {
  document.getElementById("code").classList.add("error");
  cvcErr.classList.remove("hidden");
}





function checkingNumber() {
  const codeInput = document.getElementById('card-number');
  const inputValue = codeInput.value.trim();

  if (inputValue === '') {
    outlineNumber();
    return false;
  }

  if (!/^\d{12}$/.test(inputValue)) {
    outlineNumber();
    return false;
  }

  return true;
}


function checkingMonth() {
  const monthInput = document.getElementById('month');
  const inputValue = monthInput.value.trim(); 

      if (inputValue === '') {
        outlineMonth();
        return false;
      }

      if (!/^\d{2}$/.test(inputValue)) {
         document.getElementById("month").classList.add("error");
        return false;
      }

      return true;
    }


    function checkingYear() {
      const monthInput = document.getElementById('year');
      const inputValue = monthInput.value.trim(); 

      if (inputValue === '') {
        outlineYear();
        return false;
      }

      if (!/^\d{2}$/.test(inputValue)) {
        ocument.getElementById("year").classList.add("error");
        return false;
      }

      return true;
    }


    function checkingCode() {
      const monthInput = document.getElementById('code');
      const inputValue = monthInput.value.trim(); 

      if (inputValue === '') {
        outlineCvc();
        return false;
      }

      if (!/^\d{3}$/.test(inputValue)) {
        document.getElementById("code").classList.add("error");
        return false;
      }

      return true;
    }



function checkAll() {
  const isNumberValid = checkingNumber();
  const isMonthValid = checkingMonth();
  const isYearValid = checkingYear();
  const isCodeValid = checkingCode();

  if (isNumberValid && isMonthValid && isYearValid && isCodeValid) {
    // All checks passed, redirect the user to another website
    next()
    // window.location.href = "confirmed.html"; // Change this URL to the desired destination
  } else {
    // At least one of the checks failed, do something else or show an error message
    // For example:
    return false;
  }
}


function next() {
  document.getElementById("confirmed").classList.remove("hidden")
  document.getElementById("formm").classList.add("hidden")
}