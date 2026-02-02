document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  const PASTE_GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwp82cLooJYTyI1q_Rc2RgSflpRMJySw5hj3ONZIgfZXH8POnEbCFa_hDQHOdK-BjXPfQ/exec";
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.innerText = "ĐANG GỬI...";

    const data = new FormData(form);

    try {
    await fetch(PASTE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    });

    showSuccessMessage();
    form.reset();
    } catch {
    alert("❌ Lỗi gửi đơn, vui lòng thử lại.");
    }

    btn.disabled = false;
    btn.innerText = "ĐẶT HÀNG NGAY 🛒";
  });
});

function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "flex";
}

function closeSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "none";
}

