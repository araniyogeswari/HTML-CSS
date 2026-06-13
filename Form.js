document.getElementById("details").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;

    document.getElementById("p1").innerText = "Name: " + name;
    document.getElementById("p2").innerText = "Email: " + email;
    document.getElementById("p3").innerText = "Mobile: " + phone;
    document.getElementById("p4").innerText = "Age: " + age;
    document.getElementById("p5").innerText = "Gender: " + gender;
    document.getElementById("p6").innerText = "Address: " + address;

    const image = document.getElementById("image").files[0];
    if (image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("dp").src = e.target.result;
        };
        reader.readAsDataURL(image);
    }
});