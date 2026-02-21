<template>
    <div class="contact-page">
      <h1>Contact</h1>
  
      <p class="intro">
        お問い合わせやご連絡は、以下のリンクからお願いいたします。  
        企業様からのご相談・案件のご依頼も歓迎しています。
      </p>
  
      <!-- メール -->
      <section class="contact-section">
        <h2>📧 メール</h2>
        <p>
          <a href="mailto:iraes.owada@gmail.com" class="link">
            ogamcad@gmail.com
          </a>
        </p>
      </section>
  
      <!-- GitHub -->
      <section class="contact-section">
        <h2>💻 GitHub</h2>
        <p>
          <a href="https://github.com/juugaya" target="_blank" class="link">
            https://github.com/juugaya
          </a>
        </p>
      </section>
  
      <!-- フォーム風 UI -->
      <section class="contact-section">
        <h2>📨 お問い合わせフォーム</h2>
        <div class="form">
          <label>お名前</label>
          <input type="text" placeholder="お名前を入力してください" />
  
          <label>メールアドレス</label>
          <input type="email" placeholder="example@example.com" />
  
          <label>お問い合わせ内容</label>
          <textarea rows="5" placeholder="お問い合わせ内容を入力してください"></textarea>
  
          <button disabled class="disabled-btn">
            送信（デモのため無効）
          </button>
        </div>
        <p class="note">
          ※ GitHub Pages ではサーバーが使えないため、フォーム送信は無効化しています。
        </p>
      </section>
    </div>
  </template>
  
  <style scoped>
  .contact-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .intro {
    margin-bottom: 20px;
    line-height: 1.7;
  }
  
  .contact-section {
    margin-bottom: 30px;
    padding: 15px;
    border-left: 4px solid #4fc3f7;
    background: #f7f9fa;
  }
  
  .link {
    color: #0077cc;
    text-decoration: none;
    font-weight: bold;
  }
  .link:hover {
    text-decoration: underline;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .disabled-btn {
    padding: 10px;
    background: #ccc;
    border: none;
    border-radius: 4px;
    cursor: not-allowed;
    margin-top: 10px;
  }
  
  .note {
    font-size: 0.9rem;
    color: #666;
    margin-top: 5px;
  }
  </style>
  