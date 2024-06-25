function CalcBMI(){
    let name = document.getElementById("name").value
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    let bmi = parseInt(weight)/(parseFloat(height)*parseFloat(height))

    output = document.getElementById("output")
    output.innerText = name + " has the BMI of " + bmi

    return false
}

