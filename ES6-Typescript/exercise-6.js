function doMoreWork () {

}

function b () {
  return new Promise()
}

async function a () {
  await b()
  doMoreWork()
}

a()
