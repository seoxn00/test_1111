// "오늘의 메뉴 보기" 버튼을 누르면 메뉴를 보여주거나 숨깁니다.
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuBtn.textContent = menu.classList.contains("hidden")
    ? "오늘의 메뉴 보기"
    : "메뉴 접기";
});
