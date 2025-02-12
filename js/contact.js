 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // フォームの値を取得
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // バリデーションチェック
        let valid = true;

        if (!validateEmail(email)) {
            alert('有効なメールアドレスを入力してください。');
            valid = false;
        }

        if (subject.trim() === '') {
            alert('件名を入力してください。');
            valid = false;
        }

        if (message.trim() === '') {
            alert('本文を入力してください。');
            valid = false;
        }

        if (valid) {
            alert('お問い合わせ内容が送信されました。');
            // 実際のメール送信処理を実装する場所
            // ここではデモのため、送信成功メッセージを表示する
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});