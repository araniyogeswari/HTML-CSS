document.getElementById("details").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;

    document.getElementById("p1").innerText = "Name: " + name;
    document.getElementById("p2").innerText = "Email: " + email;
    document.getElementById("p3").innerText = "Mobile: " + phone;
    document.getElementById("p4").innerText = "Age: " + age;
    document.getElementById("p5").innerText = "Date of Birth: " + dob;
    document.getElementById("p6").innerText = "Gender: " + gender;
    document.getElementById("p7").innerText = "Address: " + address;

    let image = document.getElementById("image").files[0];
    if (image) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("dp").src = e.target.result;
        };
        reader.readAsDataURL(image);
    }
});