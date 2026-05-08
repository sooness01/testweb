const form = document.getElementById('reserveForm');
const msg = document.getElementById('formMessage');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = '予約リクエストを受け付けました（デモ）。確認メールをご確認ください。';
  form.reset();
});
