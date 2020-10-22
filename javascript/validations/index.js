const form = document.getElementById('form')

var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('pwd')
var address = document.getElementById('address')
var province = document.getElementById('province')
var city = document.getElementById('city')
var postalCode = document.getElementById('pc')
var check = document.getElementById('check')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  validate()
})

const validate = () => {
  var usernameVal = username.value.trim()
  var emailVal = email.value.trim()
  var passwordVal = password.value.trim()
  var addressVal = address.value.trim()
  var provinceVal = province.value.trim()
  var cityVal = city.value.trim()
  var postalCodeVal = postalCode.value.trim()
  var checkVal = check.value.trim()

  validateUsername(usernameVal)

  validateEmail(emailVal)

  validatePassword(passwordVal)

  validateAddress(addressVal)

  validateProvince(provinceVal)

  validateCity(cityVal)

  validatePostalCode(postalCodeVal)

  validatePrivacyPolicy(checkVal)

  successMsg(usernameVal)
}

function validateUsername (usernameVal) {
  if (usernameVal === '') setErrorMsg(username, 'Field is required')
  else setSuccessMsg(username)
}

function validateEmail (emailVal) {
  if (emailVal === '') setErrorMsg(email, 'Field is required')
  else if (!isEmail(emailVal)) setErrorMsg(email, 'Email format is not valid')
  else setSuccessMsg(email)
}

function validatePassword (passwordVal) {
  if (passwordVal === '') setErrorMsg(password, 'Field is required')
  else if (passwordVal.length < 5) setErrorMsg(password, 'required minimum 6 characters')
  else setSuccessMsg(password)
}

function validateAddress (addressVal) {
  if (addressVal === '') setErrorMsg(address, 'Field is required')
  else setSuccessMsg(address)
}

function validateProvince (provinceVal) {
  if (provinceVal === '') setErrorMsg(province, 'Province is required')
  else setSuccessMsg(province)
}

function validateCity (cityVal) {
  if (cityVal === '') setErrorMsg(city, 'Field is required')
  else setSuccessMsg(city)
}

function validatePostalCode (postalCodeVal) {
  if (postalCodeVal === '') setErrorMsg(postalCode, 'Field is required')
  else if (!isPostalCode(postalCodeVal)) setErrorMsg(postalCode, 'Postal code does not meet the requirements')
  else setSuccessMsg(postalCode)
}

function validatePrivacyPolicy (checkVal) {
  if (checkVal === '') setErrorMsg(check, 'Field is required')
  else setSuccessMsg(check)
}

function setErrorMsg (input, errormsgs) {
  var formControl = input.parentElement
  var small = formControl.querySelector('small')
  formControl.className = 'form-control error'
  small.innerText = errormsgs
}

function setSuccessMsg (input) {
  var formControl = input.parentElement
  formControl.className = 'form-control success'
}

const sendData = (usernameVal, sRate, count) => {
  if (sRate === count) {
    'registration successfull'
    swal('Welcome! ' + usernameVal, 'Registration Successful', 'success')
  }
}

const successMsg = (usernameVal) => {
  var formCon = document.getElementsByClassName('form-control')
  var count = formCon.length - 1

  for (let i = 0; i < formCon.length; i++) {
    if (formCon[i].className === 'form-control success') {
      var sRate = 0 + i
      console.log(sRate)
      sendData(usernameVal, sRate, count)
    } else return false
  }
}

function isPostalCode (postalCode) {
  var validatePostal = /[0-9]{5}/

  return !!validatePostal.test(postalCode)
}

function isEmail (email) {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return !!emailRegex.test(email)
}
