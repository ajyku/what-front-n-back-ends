async function getMember() {
  const resp = await fetch('/api/', {})
  // fetch('/api/',{})
  // .then(response=>{
  //   console.log("response", response)
  // })
  // .catch(err=>{
  //   console.log("error", err)
  // })
  const data = await resp.json()
  console.log(data)
  document.getElementById('result').innerHTML = JSON.stringify(data)
}

async function addMember() {
  const fname = document.getElementById("fname").value
  const lname = document.getElementById("lname").value
  const age = document.getElementById("age").value
  const gender = document.getElementById("gender").value
  
  const resp = await fetch('/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname: fname,
      lastname: lname,
      age,
      gender,
    }),
  })
  const data = await resp.json()
  console.log("API Response data:", data)
  document.getElementById('result').innerHTML = JSON.stringify(data)
}

function clearResult() {
  document.getElementById('result').innerHTML = ''
}

async function deleteMember() {
  const mId = document.getElementById("member-id").value
  console.log("memberid", mId)
  const resp = await fetch('/api/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: mId
    }),
  })
  const data = await resp.json()
  document.getElementById('result').innerHTML = JSON.stringify(data)
}
