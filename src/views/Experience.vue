<template>
    <div class="exp-page">
      <h1>Experience</h1>
  
      <p class="intro">
        これまでに個人開発として作成した制作物（WORKS）をまとめています。  
        prof.html の内容を Vue 用に再構成したページです。
      </p>
  
      <!-- 1. Java ハイ＆ローゲーム -->
      <section class="exp">
        <h2>① Java：ハイ＆ローゲーム</h2>
        <p>
          Javaでハイ＆ローゲームを作成しました。
        </p>
        <p>
          <a href="https://juugaya.github.io/po/HighAndLowS07.java" target="_blank" class="link">
            ▶ ソースコードはこちら
          </a>
        </p>
      </section>
  
      <!-- 2. PHP 和暦変換 -->
      <section class="exp">
        <h2>② PHP：西暦 → 和暦変換プログラム</h2>
        <p>
          PHPで西暦を和暦に変換するプログラムを作成しました。
        </p>
  
        <p>１つ目のファイル：</p>
        <a href="https://juugaya.github.io/po/Changeseireki.php" target="_blank" class="link">
          ▶ こちら
        </a>
  
        <p>２つ目のファイル：</p>
        <a href="https://juugaya.github.io/po/Changeseireki1.php" target="_blank" class="link">
          ▶ こちら
        </a>
      </section>
  
      <!-- 3. 簡易掲示板 -->
      <section class="exp">
        <h2>③ PHP × Laravel：簡易掲示板</h2>
        <p>
          簡易掲示板のプログラムを作成しました。
        </p>
        <img src="GIF/phplaravelmybbs 2024-09-29 113237.gif" width="682" height="389" />


      </section>
  
      <!-- 4. SpringBoot CRUD -->
      <section class="exp">
        <h2>④ SpringBoot × MySQL：CRUDアプリ（MVCモデル）</h2>
        <p>
          SpringBoot と MySQL と Eclipse を使用して CRUD アプリを作成しました。
        </p>
        <video controls src="mp4/crud操作_ProductManagementSystem.mp4"></video>
      </section>
  
      <!-- 5. AOP 全カラム検索 -->
      <section class="exp">
        <h2>⑤ Spring AOP：全カラム検索デモ</h2>
        <p>

            <img src="GIF/aop_serch.gif" width="682" height="389" />
          AOP実装により、全カラム検索ができる仕組みを実装しました。
        </p>
      </section>
    </div>
  </template>
  
  <style scoped>
  .exp-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    color: #fff;
  }
  
  .intro {
    margin-bottom: 20px;
    line-height: 1.7;
  }
  
  .exp {
    margin-bottom: 40px;
    padding: 20px;
    border-left: 4px solid #00eaff;
    background: #0f0f0f;
  }
  
  .icon {
    width: 20px;
    vertical-align: middle;
    margin-right: 6px;
  }
  
  .link {
    color: #00eaff;
    text-decoration: none;
    font-weight: bold;
  }
  .link:hover {
    text-shadow: 0 0 8px #00eaff;
  }
  </style>
  