"use strict";
const viewthongtin = document.querySelector(`.hienthithongtin`);
const email = document.querySelector(`#email`);
const checkemail = document.querySelector(`.checkemail`);
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const btnsubmit = document.querySelector(`.btnsubmit`);
const message = (document.querySelector(
  `.message`
).textContent = `Hãy nhập email để xác thực`);
btnsubmit.addEventListener("click", function () {
  //console.log(email.value);
  if (!regex.test(email.value) || email === "") {
    const message = (document.querySelector(
      `.message`
    ).textContent = `email không hợp lệ`);
  } else {
    viewthongtin.classList.remove(`hidden`);
    checkemail.classList.add(`hidden`);
    console.log("email ok");
  }
});

/*ẩn thông tin nghề nghiệp */
const btnViewmore = document.querySelectorAll(`.view-more`);
const sectionContent = document.querySelectorAll(`.section-content`);
for (let i = 0; i < btnViewmore.length; i++) {
  btnViewmore[i].addEventListener("click", function () {
    if (btnViewmore[i].textContent === "▼ View more") {
      console.log("ok");
      sectionContent[i].classList.remove("hide");
      btnViewmore[i].textContent = "▲ View less";
    } else if (btnViewmore[i].textContent === "▲ View less") {
      sectionContent[i].classList.add("hide");
      btnViewmore[i].textContent = "▼ View more";
    }
  });
}
